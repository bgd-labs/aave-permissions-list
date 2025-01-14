# CELO 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  Not owned | |--------|--------|
|  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  not upgradeable | |--------|--------|
|  [CCIP adapter](https://celoscan.io//address/0x3d534E8964e7aAcfc702751cc9A2BB6A9fe7d928) |  not upgradeable | |--------|--------|
|  [LayerZero adapter](https://celoscan.io//address/0x83BC62fbeA15B7Bfe11e8eEE57997afA5451f38C) |  not upgradeable | |--------|--------|
|  [Hyperlane adapter](https://celoscan.io//address/0x7b065E68E70f346B18636Ab86779980287ec73e0) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  Not owned | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  adiConfigurations |  External Contract | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,External Contract | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  - |  onlyRetryGuardian |  [BGD](https://celoscan.io//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwner |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyGuardian |  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E), [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyRescueGuardian |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  - |  onlyOwner |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://celoscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [CCIP adapter](https://celoscan.io//address/0x3d534E8964e7aAcfc702751cc9A2BB6A9fe7d928) |  - |  trustedRemote |  [CrossChainController(Eth)](https://celoscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [LayerZero adapter](https://celoscan.io//address/0x83BC62fbeA15B7Bfe11e8eEE57997afA5451f38C) |  - |  trustedRemote |  [CrossChainController(Eth)](https://celoscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [Hyperlane adapter](https://celoscan.io//address/0x7b065E68E70f346B18636Ab86779980287ec73e0) |  - |  trustedRemote |  [CrossChainController(Eth)](https://celoscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwner |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwnerOrGuardian |  [Aave Granular Guardian Celo](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39), [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyRescueGuardian |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyApprovedBridges |  [CCIP adapter](https://celoscan.io//address/0x3d534E8964e7aAcfc702751cc9A2BB6A9fe7d928), [LayerZero adapter](https://celoscan.io//address/0x83BC62fbeA15B7Bfe11e8eEE57997afA5451f38C), [Hyperlane adapter](https://celoscan.io//address/0x7b065E68E70f346B18636Ab86779980287ec73e0) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [BGD](https://celoscan.io//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) |  2/3 |  0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://celoscan.io//address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://celoscan.io//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://celoscan.io//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) |  5/9 |  0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://celoscan.io//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://celoscan.io//address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://celoscan.io//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://celoscan.io//address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://celoscan.io//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://celoscan.io//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://celoscan.io//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://celoscan.io//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://celoscan.io//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://celoscan.io//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) | |--------|--------|

