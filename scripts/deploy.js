const Config = require("./config");
const { ethers, hardhatArguments } = require("hardhat");
async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "dev";
  const [deployer] = await ethers.getSigners();

  console.log("deploy from address: ", deployer.address);
  const test = await ethers.deployContract("test");
  const testAddress = await test.getAddress();
  console.log("Marketplace address:", testAddress);
  Config.setConfig(network + ".test", testAddress);

  await Config.updateConfig();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
