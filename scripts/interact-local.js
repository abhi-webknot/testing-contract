const hre = require("hardhat");

async function main() {
  const SaveConversionRate = await hre.ethers.getContractFactory("SaveConversionRate");
  const saveConversionRate = await SaveConversionRate.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  // Save a conversion rate
  // await saveConversionRate.saveConversionRate(
  //   "USD",
  //   "US Dollar",
  //   "EUR",
  //   "Euro",
  //   100000, // conversionA
  //   200000, // conversionB
  //   300000, // conversionC
  //   400000, // conversionD
  //   "2023-08-08",
  //   "2023-12-31"
  // );
  // console.log("Conversion rate saved");

  // // Get conversion rate count
  // const count = await saveConversionRate.conversionRateCount();
  // console.log("Conversion rate count:", count.toString());

  // Get the latest conversion rate
  // const latestIndex = count - 1n;
  const conversionRate = await saveConversionRate.getConversionRate(0);
  console.log("Conversion Rate 1");

  console.log("Conversion Rate with named properties:");
  console.log("fromCurrencyId:", conversionRate.fromCurrencyId);
  console.log("fromCurrencyName:", conversionRate.fromCurrencyName);
  console.log("toCurrencyId:", conversionRate.toCurrencyId);
  console.log("toCurrencyName:", conversionRate.toCurrencyName);
  console.log("sourceAmt:", conversionRate.sourceAmt.toString());
  console.log("destAmt:", conversionRate.destAmt.toString());
  console.log("startDate:", conversionRate.startDate);
  console.log("endDate:", conversionRate.endDate);

  const conversionRate1 = await saveConversionRate.getConversionRate(1);
  console.log("Conversion Rate 2");

  console.log("Conversion Rate with named properties:");
  console.log("fromCurrencyId:", conversionRate1.fromCurrencyId);
  console.log("fromCurrencyName:", conversionRate1.fromCurrencyName);
  console.log("toCurrencyId:", conversionRate1.toCurrencyId);
  console.log("toCurrencyName:", conversionRate1.toCurrencyName);
  console.log("sourceAmt:", conversionRate1.sourceAmt.toString());
  console.log("destAmt:", conversionRate1.destAmt.toString());
  console.log("startDate:", conversionRate1.startDate);
  console.log("endDate:", conversionRate1.endDate);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});