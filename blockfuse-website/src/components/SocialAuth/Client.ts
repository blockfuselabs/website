
import { createThirdwebClient } from "thirdweb";
import { inAppWallet } from "thirdweb/wallets";


const client = createThirdwebClient({
  clientId: "3892e1dd132c745b196429192dd03438",
});


const chain = "sepolia"; 

export { client, chain, inAppWallet };
