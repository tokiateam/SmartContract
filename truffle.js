Web3 = require('web3');
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      from: "0x13ba42b19c25c0f6ecb7ab1c5db8d736231ecb94"
    },
    rinkeby: {
      host: "127.0.0.1", // Connect to geth on the specified
      port: 8545,
      from: "0x73c8e6d9D10e76e7ba3Efbd91AdA52f32Dfc9A6B", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    },
    live: {
      host: "127.0.0.1", // Connect to geth on the specified
      port: 8545,
      from: "0x5D285a66551B918fb4e116258215C4428e90E9CD", // default address to use for any transaction Truffle makes during migrations
      network_id: 1,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
