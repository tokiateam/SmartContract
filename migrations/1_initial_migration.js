//var Migrations = artifacts.require("./Migrations.sol");
var TokiaToken = artifacts.require("./TokiaToken");

module.exports = function(deployer) {
  deployer.deploy(TokiaToken);
};
