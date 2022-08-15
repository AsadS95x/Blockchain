const Migrations = artifacts.require("FirstContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
