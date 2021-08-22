const MyNFT = artifacts.require("./MyNFT.sol");
const Auctions = artifacts.require("./Auctions.sol");

module.exports = async function(deployer) {
  deployer.deploy(MyNFT, "ReVendor", "ReV")
  deployer.deploy(Auctions)
};
