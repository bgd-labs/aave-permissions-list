import { ethers, providers } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { Contracts } from '../helpers/configs';
import { getStaticPermissionsJson } from '../helpers/fileSystem';
import { generateRoles } from '../helpers/jsonParsers';
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book';
import polygonBridgeExecutorABI from '../abis/polygonBridgeExecutorABI.json';
import optimismBridgeExecutorABI from '../abis/optimismExecutorBridgeABI.json';
import { getSafeOwners } from '../helpers/guardian';

export const bridgeExecutors: Record<number, string> = {
  [ChainId.optimism]: './statics/bridgeExecutors/optimism.json',
  [ChainId.arbitrum_one]: './statics/bridgeExecutors/arbitrum.json',
  [ChainId.polygon]: './statics/bridgeExecutors/polygon.json',
};

export const getBridgeExecutor = async (
  provider: providers.Provider,
  chainId: ChainId,
): Promise<Contracts> => {
  const bridgeExecutorPermissionsObj = getStaticPermissionsJson(
    bridgeExecutors[chainId],
  );

  const obj: Contracts = {};
  const roles = generateRoles(bridgeExecutorPermissionsObj);

  if (chainId === ChainId.polygon) {
    const bridgeExecutorContract = new ethers.Contract(
      AaveGovernanceV2.POLYGON_BRIDGE_EXECUTOR,
      polygonBridgeExecutorABI,
      provider,
    );
    const guardian = await bridgeExecutorContract.getGuardian();
    const fxChild = await bridgeExecutorContract.getFxChild();
    const fxRootSender = await bridgeExecutorContract.getFxRootSender();

    obj['PolygonBridgeExecutor'] = {
      address: AaveGovernanceV2.POLYGON_BRIDGE_EXECUTOR,
      modifiers: [
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: guardian,
              owners: await getSafeOwners(provider, guardian),
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyGuardian'],
        },
        {
          modifier: 'onlyThis',
          addresses: [
            {
              address: AaveGovernanceV2.POLYGON_BRIDGE_EXECUTOR,
              owners: [],
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyThis'],
        },
        {
          modifier: 'onlyFxChild',
          addresses: [
            {
              address: fxChild,
              owners: await getSafeOwners(provider, fxChild),
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyFxChild'],
        },
        {
          modifier: 'onlyFxRootSender',
          addresses: [
            {
              address: fxRootSender,
              owners: await getSafeOwners(provider, fxRootSender),
            },
          ],
          functions: roles['PolygonBridgeExecutor']['onlyFxRootSender'],
        },
      ],
    };
  } else if (chainId === ChainId.optimism) {
    const bridgeExecutorContract = new ethers.Contract(
      AaveGovernanceV2.OPTIMISM_BRIDGE_EXECUTOR,
      optimismBridgeExecutorABI,
      provider,
    );
    const guardian = await bridgeExecutorContract.getGuardian();
    const ethereumGovExecutor =
      await bridgeExecutorContract.getEthereumGovernanceExecutor();

    obj['OptimismBridgeExecutor'] = {
      address: AaveGovernanceV2.OPTIMISM_BRIDGE_EXECUTOR,
      modifiers: [
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: guardian,
              owners: await getSafeOwners(provider, guardian),
            },
          ],
          functions: roles['OptimismBridgeExecutor']['onlyGuardian'],
        },
        {
          modifier: 'onlyThis',
          addresses: [
            {
              address: AaveGovernanceV2.OPTIMISM_BRIDGE_EXECUTOR,
              owners: [],
            },
          ],
          functions: roles['OptimismBridgeExecutor']['onlyThis'],
        },
        {
          modifier: 'onlyEthereumGovernanceExecutor',
          addresses: [
            {
              address: ethereumGovExecutor,
              owners: await getSafeOwners(provider, ethereumGovExecutor),
            },
          ],
          functions:
            roles['OptimismBridgeExecutor']['onlyEthereumGovernanceExecutor'],
        },
      ],
    };
  } else if (chainId === ChainId.arbitrum_one) {
    const bridgeExecutorContract = new ethers.Contract(
      AaveGovernanceV2.ARBITRUM_BRIDGE_EXECUTOR,
      optimismBridgeExecutorABI,
      provider,
    );
    const guardian = await bridgeExecutorContract.getGuardian();
    const ethereumGovExecutor =
      await bridgeExecutorContract.getEthereumGovernanceExecutor();

    obj['ArbitrumBridgeExecutor'] = {
      address: AaveGovernanceV2.ARBITRUM_BRIDGE_EXECUTOR,
      modifiers: [
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: guardian,
              owners: await getSafeOwners(provider, guardian),
            },
          ],
          functions: roles['ArbitrumBridgeExecutor']['onlyGuardian'],
        },
        {
          modifier: 'onlyThis',
          addresses: [
            {
              address: AaveGovernanceV2.ARBITRUM_BRIDGE_EXECUTOR,
              owners: [],
            },
          ],
          functions: roles['ArbitrumBridgeExecutor']['onlyThis'],
        },
        {
          modifier: 'onlyEthereumGovernanceExecutor',
          addresses: [
            {
              address: ethereumGovExecutor,
              owners: await getSafeOwners(provider, ethereumGovExecutor),
            },
          ],
          functions:
            roles['ArbitrumBridgeExecutor']['onlyEthereumGovernanceExecutor'],
        },
      ],
    };
  } else {
    return {};
  }

  return obj;
};
