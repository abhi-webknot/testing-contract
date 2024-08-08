const hre = require("hardhat");

async function main() {
  const SaveConversionRate = await hre.ethers.getContractFactory("SaveConversionRate");
  const saveConversionRate = await SaveConversionRate.deploy();
  await saveConversionRate.waitForDeployment();
  console.log("saveConversionRate deployed to:", await saveConversionRate.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});