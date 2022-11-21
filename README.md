# transparentproxy2-truffle
+ install the dependencies: npm install
+ compile the smart contracts: truffle compile
+ deploy Box, MyProxyAdmin, ProxyAdmin:
    - rename 2_upgrade.js to 2_upgrade.jsxx
    - truffle migrate --network testnet
+ upgrade:
    - rename 2_upgrade.jsxx back to 2_upgrade.js
    - rename 1_initital_deploy.js to 1_initial_deploy.jsxx
    - truffle migrate --network testnet
+ verify MyProxyAdmin: truffle run verify MyProxyAdmin@{MyProxyAdmin address} --network testnet
+ verify Box: truffle run verify Box@{Box address} --network testnet
+ verify BoxV2: truffle run verify BoxV2@{BoxV2 address} --network testnet
+ verify MyProxy: truffle run verify MyProxy@{MyProxy address} --network testnet
  unfortunately it doesn't actually verify MyProxy but it verify the logic smart contract, Box


sample of deployed addresses
Box:            0x38dB64711039Af5d06B63E83dFb70F610BdFaB2D
MyProxyAdmin:   0x0A716EA4b418d571D4eb844Efd35282C8D9F492f
MyProxy:        0x7FCD5D50849edA7f0419d5E3a753bf4F9CeBa49e
BoxV2:          0x4E738E322637ED637bB7465E45214c4fE2e7546C      