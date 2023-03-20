import { HardhatUserConfig } from 'hardhat/config';

import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';

import 'hardhat-contract-sizer';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 5,
    },
  },
  typechain: {
    outDir: '../client/libs/hardhat/types' && './typechain-types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false,
    externalArtifacts: ['externalArtifacts/*.json'],
    dontOverrideCompile: false,
  },
  paths: {
    artifacts: '../client/libs/hardhat/artifacts',
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
};

export default config;
