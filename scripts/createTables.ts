import {
  getAllPermissionsJson,
  getPermissionsByNetwork,
  saveJson,
} from '../helpers/fileSystem.js';
import { getNetowkName, networkConfigs, Pools } from '../helpers/configs.js';
import { explorerAddressUrlComposer } from '../helpers/explorer.js';
import { ChainId, ChainIdToNetwork } from '@aave/contract-helpers';
import { generateContractsByAddress } from '../helpers/jsonParsers.js';
import {
  getLineSeparator,
  getTableBody,
  getTableHeader,
} from '../helpers/tables.js';
import { utils } from 'ethers';
import { getPrincipalReadme } from './readme.js';
import {
  AddressInfo,
  ContractsByAddress,
  PoolGuardians,
} from '../helpers/types.js';

export const generateTableAddress = (
  address: string | undefined,
  addressesNames: Record<string, string>,
  contractsByAddress: ContractsByAddress,
  poolGuardians: PoolGuardians,
  network: string,
  chainId?: string,
): string => {
  const checkSummedAddress = address ? utils.getAddress(address) : null;

  if (chainId) {
    const newContractsByAddress = generateContractsByAddress({
      ...getPermissionsByNetwork(chainId)['V3'].govV3?.contracts,
      ...getPermissionsByNetwork(chainId)['V3'].contracts,
    });
    const networkContractsByAddress: Record<string, string> = {};
    Object.keys(newContractsByAddress).forEach((key) => {
      networkContractsByAddress[
        key
      ] = `${newContractsByAddress[key]}(${getNetowkName[chainId]})`;
    });
    contractsByAddress = networkContractsByAddress;
  }

  return checkSummedAddress
    ? '[' +
        (addressesNames[checkSummedAddress]
          ? addressesNames[checkSummedAddress]
          : contractsByAddress[checkSummedAddress]
          ? contractsByAddress[checkSummedAddress]
          : poolGuardians[checkSummedAddress]
          ? addressesNames[checkSummedAddress]
            ? addressesNames[checkSummedAddress]
            : `${checkSummedAddress} (Safe)`
          : checkSummedAddress) +
        '](' +
        (contractsByAddress[checkSummedAddress] &&
        (contractsByAddress[checkSummedAddress] === 'ShortExecutor' ||
          contractsByAddress[checkSummedAddress] === 'LongExecutor')
          ? explorerAddressUrlComposer(
              checkSummedAddress,
              ChainId.mainnet.toString(),
            )
          : explorerAddressUrlComposer(checkSummedAddress, network)) +
        ')'
    : '-';
};

export const generateTable = (network: string, pool: string): string => {
  let readmeDirectoryTable: string = '';

  // to generate tenderly tables, add TENDERLY flag on .env file
  if (
    (!process.env.TENDERLY || process.env.TENDERLY === 'false') &&
    pool.toLowerCase().indexOf('tenderly') > -1
  ) {
    return '';
  }

  const networkPermits = getPermissionsByNetwork(network);
  const mainnetPermissions = getPermissionsByNetwork(ChainId.mainnet);

  const networkName =
    network === '8453'
      ? 'BASE'
      : network == '56'
      ? 'BINANCE'
      : network == '100'
      ? 'GNOSIS'
      : ChainIdToNetwork[Number(network)].toUpperCase();

  const addressesNames = networkConfigs[network].addressesNames || {};

  // create network Readme with pool tables
  let readmeByNetwork = `# ${networkName} \n`;

  const poolGuardians: Record<string, string[]> = {};
  const poolPermitsByContract = networkPermits[pool];
  // create pool table
  readmeByNetwork += `## ${pool} \n`;

  let contractsByAddress: Record<string, string> = {};

  // add gov contracts to contractsByAddresses
  if (pool !== Pools.GOV_V2 && pool !== Pools.GOV_V2_TENDERLY) {
    contractsByAddress = generateContractsByAddress({
      ...mainnetPermissions[Pools.GOV_V2].contracts,
    });
  }

  const v3Contracts = generateContractsByAddress({
    ...poolPermitsByContract.contracts,
    ...getPermissionsByNetwork(network)['V3'].govV3?.contracts,
    ...getPermissionsByNetwork(network)['V3'].contracts,
  });
  contractsByAddress = { ...contractsByAddress, ...v3Contracts };
  let contractTable = `### contracts\n`;
  const contractsModifiersHeaderTitles = [
    'contract',
    'proxyAdmin',
    'modifier',
    'permission owner',
    'functions',
  ];
  const header = getTableHeader(contractsModifiersHeaderTitles);
  contractTable += header;

  // fill pool table
  let tableBody = '';
  for (let contractName of Object.keys(poolPermitsByContract.contracts)) {
    const contract = poolPermitsByContract.contracts[contractName];

    if (contract.modifiers.length === 0) {
      tableBody += getTableBody([
        `[${contractName}](${explorerAddressUrlComposer(
          contract.address,
          network,
        )})`,
        `${generateTableAddress(
          contract.proxyAdmin,
          addressesNames,
          contractsByAddress,
          poolGuardians,
          network,
        )}`,
        `-`,
        `-`,
        '-',
      ]);
      tableBody += getLineSeparator(contractsModifiersHeaderTitles.length);
    }
    for (let modifier of contract.modifiers) {
      for (let modifierAddress of modifier.addresses) {
        if (!poolGuardians[modifierAddress.address]) {
          if (modifierAddress.owners.length > 0) {
            poolGuardians[modifierAddress.address] = modifierAddress.owners;
          }
        }
      }

      tableBody += getTableBody([
        `[${contractName}](${explorerAddressUrlComposer(
          contract.address,
          network,
        )})`,
        `${generateTableAddress(
          contract.proxyAdmin,
          addressesNames,
          contractsByAddress,
          poolGuardians,
          network,
        )}`,
        `${modifier.modifier}`,
        `${modifier.addresses
          .map((modifierAddress: AddressInfo) =>
            generateTableAddress(
              modifierAddress.address,
              addressesNames,
              contractsByAddress,
              poolGuardians,
              network,
              modifierAddress.chain,
            ),
          )
          .join(', ')}`,
        modifier?.functions ? modifier.functions.join(', ') : '',
      ]);
      tableBody += getLineSeparator(contractsModifiersHeaderTitles.length);
    }
  }

  contractTable += tableBody;

  readmeDirectoryTable += getTableBody([
    networkName,
    pool,
    `[Permissions](./out/${networkName}-${pool}.md#contracts)`,
  ]);
  readmeDirectoryTable += getLineSeparator(3);

  readmeByNetwork += contractTable + '\n';

  if (
    poolPermitsByContract.govV3 &&
    Object.keys(poolPermitsByContract.govV3).length > 0
  ) {
    let govV3Table = `### Governance V3 Contracts \n`;
    const govV3HeaderTitles = [
      'contract',
      'proxyAdmin',
      'modifier',
      'permission owner',
      'functions',
    ];
    const govV3Header = getTableHeader(govV3HeaderTitles);
    govV3Table += govV3Header;

    let govV3tableBody = '';
    for (let contractName of Object.keys(
      poolPermitsByContract.govV3.contracts,
    )) {
      const contract = poolPermitsByContract.govV3.contracts[contractName];

      if (contract.modifiers.length === 0) {
        govV3tableBody += getTableBody([
          `[${contractName}](${explorerAddressUrlComposer(
            contract.address,
            network,
          )})`,
          `${generateTableAddress(
            contract.proxyAdmin,
            addressesNames,
            contractsByAddress,
            poolGuardians,
            network,
          )}`,
          `-`,
          `-`,
          '-',
        ]);
        govV3tableBody += getLineSeparator(
          contractsModifiersHeaderTitles.length,
        );
      }
      for (let modifier of contract.modifiers) {
        for (let modifierAddress of modifier.addresses) {
          if (!poolGuardians[modifierAddress.address]) {
            if (modifierAddress.owners.length > 0) {
              poolGuardians[modifierAddress.address] = modifierAddress.owners;
            }
          }
        }

        govV3tableBody += getTableBody([
          `[${contractName}](${explorerAddressUrlComposer(
            contract.address,
            network,
          )})`,
          `${generateTableAddress(
            contract.proxyAdmin,
            addressesNames,
            contractsByAddress,
            poolGuardians,
            network,
          )}`,
          `${modifier.modifier}`,
          `${modifier.addresses
            .map((modifierAddress: AddressInfo) =>
              generateTableAddress(
                modifierAddress.address,
                addressesNames,
                contractsByAddress,
                poolGuardians,
                network,
                modifierAddress.chain,
              ),
            )
            .join(', ')}`,
          modifier?.functions ? modifier.functions.join(', ') : '',
        ]);
        govV3tableBody += getLineSeparator(
          contractsModifiersHeaderTitles.length,
        );
      }
    }

    govV3Table += govV3tableBody;
    readmeByNetwork += govV3Table + '\n';
  }

  if (Object.keys(poolGuardians).length > 0) {
    let guardianTable = `### Guardians \n`;
    const guardianHeaderTitles = ['Guardian', 'Address', 'Owners'];
    const guardianHeader = getTableHeader(guardianHeaderTitles);
    guardianTable += guardianHeader;

    Object.keys(poolGuardians).forEach((guardian) => {
      guardianTable += getTableBody([
        `[${
          addressesNames[utils.getAddress(guardian)]
            ? addressesNames[utils.getAddress(guardian)]
            : `${utils.getAddress(guardian)} (Safe)`
        }](${explorerAddressUrlComposer(guardian, network)})`,
        guardian,
        `${poolGuardians[guardian]
          .map(
            (owner) =>
              `[${owner}](${explorerAddressUrlComposer(owner, network)})`,
          )
          .join(', ')}`,
      ]);
      guardianTable += getLineSeparator(guardianHeaderTitles.length);
    });

    readmeByNetwork += guardianTable + '\n';
  }
  let adminTable = `### Admins \n`;
  const adminsHeaderTitles = ['Role', 'Contract'];
  const adminHeader = getTableHeader(adminsHeaderTitles);
  adminTable += adminHeader;

  if (
    networkConfigs[network].pools[pool] &&
    poolPermitsByContract.roles &&
    poolPermitsByContract.roles.role
  ) {
    Object.keys(poolPermitsByContract.roles.role).forEach((role) => {
      const roleAddresses = poolPermitsByContract.roles?.role[role] || [];
      adminTable += getTableBody([
        role,
        `${roleAddresses
          .map((roleAddress: string) =>
            generateTableAddress(
              roleAddress,
              addressesNames,
              contractsByAddress,
              poolGuardians,
              network,
            ),
          )
          .join(', ')}`,
      ]);
      adminTable += getLineSeparator(adminsHeaderTitles.length);
    });

    readmeByNetwork += adminTable + '\n';
  }

  saveJson(`./out/${networkName}-${pool}.md`, readmeByNetwork);

  return readmeDirectoryTable;
};

export const generateAllTables = () => {
  const networks = Object.keys(networkConfigs).map((network) => network);

  // create readme string
  let readmeDirectoryTable = '';
  const readmeDirectoryTableHeaderTitles = ['Network', 'System type', 'Tables'];
  const readmeDirectoryHeader = getTableHeader(
    readmeDirectoryTableHeaderTitles,
  );
  readmeDirectoryTable += readmeDirectoryHeader;

  for (let network of networks) {
    const pools = Object.keys(networkConfigs[network].pools).map(
      (pool) => pool,
    );
    for (let pool of pools) {
      readmeDirectoryTable += generateTable(network, pool);
    }
  }

  saveJson('./README.md', getPrincipalReadme(readmeDirectoryTable));
};

generateAllTables();
