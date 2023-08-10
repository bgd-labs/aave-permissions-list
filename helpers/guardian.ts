import { ethers, providers, utils } from 'ethers';
import gnosisSafeABI from '../abis/gnosisSafe.json' assert { type: 'json' };

export const getSafeOwners = async (
  provider: providers.Provider,
  address: string,
): Promise<string[]> => {
  const gnosisContract = new ethers.Contract(address, gnosisSafeABI, provider);

  try {
    const safeOwners = await gnosisContract.getOwners();
    return safeOwners;
  } catch (error) {
    return [];
  }
};
