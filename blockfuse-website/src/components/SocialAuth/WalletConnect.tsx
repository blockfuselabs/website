import React, { useState } from "react";
import { ConnectButton, useSendTransaction } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { prepareContractCall } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { utils } from "ethers";
import { FaLock } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";


const client = createThirdwebClient({
  clientId: "3892e1dd132c745b196429192dd03438",
});

const chain = {
  rpc: "https://eth-sepolia.g.alchemy.com/v2/o1lEX0VBV5svBnSxttojbhEM0_p6uy4",
};

const SocialWallet = () => {
  const [connected, setConnected] = useState(false);




  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8 lg:py-20">
       

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-8 space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 sm:space-y-6 max-w-2xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Create Your Web3 Wallet
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl px-2 sm:px-0">
              Get started with blockchain technology using your social accounts. 
              Simple, secure, and user-friendly.
            </p>
          </div>

          {/* Wallet Connection Card */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 sm:p-8 w-full max-w-md mx-4">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="bg-purple-500/10 rounded-full p-3 sm:p-4 inline-block">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-white text-lg sm:text-xl font-semibold">
                  Connect with Social Account
                </h2>
                <p className="text-gray-400 text-sm sm:text-base px-2">
                  Choose your preferred social login method to create your wallet
                </p>
              </div>

              <div className="w-full flex justify-center"> 
                <ConnectButton
                  client={client}
                  connectModal={{ size: "compact" }}
                  onConnect={() => setConnected(true)}
                  buttonText="Create Wallet"
                  theme={{
                    colors: {
                      modalBg: "#FFFFFF",
                      primaryText: "#000000",
                      secondaryText: "#4B5563",
                      borderColor: "#E5E7EB",
                      primaryButtonBg: "#BF64E7",
                      primaryButtonText: "#000",
                      connectedButtonBg: "#ffffff",
                      connectedButtonBgHover: "#ccc",
                      accentButtonBg: "#000",
                      accentButtonText: "#000",
                      accentText: "#000",
                    },
                    type: "light",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
            {[
              {
                title: "Secure",
                description: "Protected by cutting-edge encryption",
                icon: <FaLock className="w-6 h-6 sm:w-8 sm:h-8" />,
              },
              {
                title: "Simple",
                description: "No complicated setup required",
                icon: <TbTargetArrow className="w-6 h-6 sm:w-8 sm:h-8" />,
              },
              {
                title: "Social",
                description: "Use your existing accounts",
                icon: <BsGlobe className="w-6 h-6 sm:w-8 sm:h-8" />,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center"
              >
                <div className="text-purple-400 flex justify-center mb-2 sm:mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialWallet;