import { DexScreener } from "../src/core/DexScreener";

const main = async () => {
  const data = await new DexScreener().getLatestBoostedTokens();

  console.log(data);
};
main();
