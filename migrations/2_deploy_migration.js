var MainContract = artifacts.require('MainContract');
//var SubToken = artifacts.require('SubToken');
module.exports = function (deployer) {
    deployer.deploy(MainContract)
}