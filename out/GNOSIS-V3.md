# GNOSIS 
## V3 
### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://gnosisscan.io//address/0xb50201558B00496A145fE76f7424749556E326D8) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyPoolConfigurator |  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://gnosisscan.io//address/0xb50201558B00496A145fE76f7424749556E326D8) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyPoolAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://gnosisscan.io//address/0xb50201558B00496A145fE76f7424749556E326D8) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyPoolAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyEmergencyAdmin |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D), [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F) |  setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://gnosisscan.io//address/0xeb0a051be10228213BAEb449db63719d6742F7c4) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://gnosisscan.io//address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyFundsAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://gnosisscan.io//address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyAdminOrRecipient |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75), [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://gnosisscan.io//address/0xaD4F91D26254B6B0C6346b390dDA2991FDE2F20d) |  - |  onlyEmissionManager |  [EmissionManager](https://gnosisscan.io//address/0x41585C50524fb8c3899B43D7D797d9486AAc94DB) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://gnosisscan.io//address/0xb7E51aA2A5f4dD478F183A593F67637ed6F1d1D9) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://gnosisscan.io//address/0x41585C50524fb8c3899B43D7D797d9486AAc94DB) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://gnosisscan.io//address/0x1236010CECea55998384e795B59815D871f5f94d) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [RatesFactory](https://gnosisscan.io//address/0x73dDE2A75c06a108912bf7Ff600eDdCE9d96Ed25) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  - |  - |  - | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://gnosisscan.io//address/0xEc710f59005f48703908bC519D552Df5B8472614) |  - |  setRoleAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |   | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateGasLimit, addVotingPortals, removeVotingPortals, setVotingConfigs, setPowerStrategy | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyGuardian |  [0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6](https://gnosisscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  rescueVotingPortal | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwnerOrGuardian |  [0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6](https://gnosisscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6), [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyRescueGuardian |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |   | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  - |  onlyOwner |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwner |  [0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6](https://gnosisscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyGuardian |  [0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6](https://gnosisscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwnerOrGuardian |  [0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6](https://gnosisscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6), [0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6](https://gnosisscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyRescueGuardian |  [0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6](https://gnosisscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyApprovedBridges |  [0x7b62461a3570c6AC8a9f8330421576e417B71EE7](https://gnosisscan.io//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7), [0x4A4c73d563395ad827511F70097d4Ef82E653805](https://gnosisscan.io//address/0x4A4c73d563395ad827511F70097d4Ef82E653805), [0x889c0cc3283DB588A34E89Ad1E8F25B0fc827b4b](https://gnosisscan.io//address/0x889c0cc3283DB588A34E89Ad1E8F25B0fc827b4b) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  EMERGENCY_ADMIN |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|
