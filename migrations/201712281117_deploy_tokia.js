// We use artifacts.require to tell Truffle which artifacts we'll be
// interacting with.

// In the example below, we are requiring the contract HelloWorld
// which returns an abstraction that we can use for the deployment
const TokiaToken = artifacts.require('TokiaToken')

module.exports = function(deployer) {
  deployer.deploy(TokiaToken)
}
