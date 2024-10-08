require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    maticTestNet: {
            url: process.env.POLYGON_RPC_URL,
            accounts: [process.env.TESTNET_PRIVATE_KEY],
        },
  }
};
