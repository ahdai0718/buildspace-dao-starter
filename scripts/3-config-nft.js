import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0x6139A5877B3eF6cae4a9aDc57fAc8C2A855f9440",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "GG Head",
        description: "This NFT will give you access to GGDAO!",
        image: readFileSync("scripts/assets/gg.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
