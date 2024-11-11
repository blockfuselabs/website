import React, { useState } from 'react';
import Logo from "../assets/images/blockfuse-logo.png";
import Flower from "../assets/svgs/flower.svg";
import Circles from "../assets/svgs/circles.svg";
import { QRCodeCanvas } from 'qrcode.react';
import { MoveRight, Copy } from "lucide-react";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton, darkTheme } from "thirdweb/react";


import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "3892e1dd132c745b196429192dd03438",
});

const customTheme = darkTheme({
  colors: {
    primaryText:"#000000",
    primaryButtonBg: "#000",
    primaryButtonText: "#000000",

  },
});

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x2f85930757A742A480AC1196fcD42a952077968a";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };


  return (
    <div className="h-full flex flex-col items-center justify-center px-4 py-16 relative">
      <section className="relative flex items-center justify-center h-[80vh] px-6 py-16 sm:px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
          <img
            src={Circles}
            alt="Background illustration representing blockchain technology"
            width="800"
            height="400"
            loading="lazy"
            className="w-full h-auto max-w-[600px]"
          />
        </div>

        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl md:text-6xl dark:text-white">
              Donate to{" "}
              <span className="text-purple-500 font-bold">Blockfuse Labs</span>
            </h1>
          </header>
          <p className="mt-4 text-lg md:text-xl dark:text-gray-300">
            contribute to the development of blockchain technology.
          </p>
        </div>
      </section>

      <div className="relative flex items-center justify-center mb-16">
        <div className="absolute -left-64 z-0 dark:bg-[#1A1A1A] bg-gray-100 w-72 h-80 border border-purple-500 flex items-center justify-center">
        <div className="text-purple-500 absolute left-0 top-0 text-xl font-light">
            <img src={Flower} alt="Flower Icon" className="w-48" />
          </div>
        </div>

        <div className="relative z-10 dark:bg-[#1A1A1A] bg-gray-100 p-10 border border-purple-500 w-[600px] h-[500px] shadow-lg flex flex-col justify-center items-center space-y-6">
          <h2 className="dark:text-white text-2xl font-light mb-6 text-center">
            Support Blockfuse Labs
          </h2>

          <QRCodeCanvas  value={walletAddress} size={128} className="mb-4" />
          <div className="flex items-center space-x-2">
            <span className="dark:text-gray-300">{walletAddress}</span>
            <button onClick={copyToClipboard} className="text-purple-500">
              <Copy className="w-5 h-5" />
            </button>
            {copied && <span className="text-sm text-green-500">Copied!</span>}
          </div>

          <ConnectButton
  client={client}
  wallets={wallets}
  connectModal={{ size: "wide" }}
  theme={{
    fontFamily: "Space Grotesk",
    type: "light",
  }}
  connectButton={{
    label: "Connect Wallet to Donate",
    className: "w-full dark:bg-black border border-purple-500 text-purple-500 py-3 text-lg hover:bg-purple-600 hover:text-white",
    style: {
      borderRadius: "0",
      width: "100%",
      border: "1px solid #6B46C1",
      color:"#6B46C1"
    },
  }}
/>

        </div>

        <div className="absolute -right-64 z-0 dark:bg-[#1A1A1A] bg-gray-100 w-72 h-80 border border-purple-500 flex items-center justify-center">
          <img src={Logo} alt="Blockfuse Logo" className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default Donate;
