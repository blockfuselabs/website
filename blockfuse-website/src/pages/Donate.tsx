import React, { useState, useEffect } from "react";
import Logo from "../assets/images/blockfuse-logo.png";
import Circles from "../assets/svgs/circles.svg";
import Flower from "../assets/svgs/flower.svg";
import { QRCodeCanvas } from "qrcode.react";
import { MoveRight, Copy } from "lucide-react";
import { useAccount, useConnect } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { parseEther } from "viem";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Styled components remain the same
const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  width: 400px;
  color: #7c3aed;
  background: #000;
  border: 1px solid #7c3aed;
  font-size: 16px;
  font-weight: 500;
  transition: 200ms ease;
  &:hover {
    transform: translateY(-6px);
  }
  &:active {
    transform: translateY(-3px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const ContributeButton = styled(StyledButton)`
  margin-top: 1rem;
  background: #7c3aed;
  color: #000;
`;

const CarouselContainer = styled.div`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    display: inline-flex;
    animation: scroll 5s linear infinite;
    white-space: nowrap;
  }

  &:hover .animate-scroll {
    animation-play-state: paused;
  }

  .animate-scroll > div {
    margin-right: 1rem;
    flex-shrink: 0;
  }
`;

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [addName, setAddName] = useState(false);
  const [name, setName] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [contributors, setContributors] = useState([]);
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [txError, setTxError] = useState("");

  const walletAddress = "0x59229960316f78D20aa9e958207C8AA62a699636";
  const { address, isConnected } = useAccount();

  
  useEffect(() => {
    const storedContributors =
      JSON.parse(localStorage.getItem("contributors")) || [];
    setContributors(storedContributors);
  }, []);

  useEffect(() => {
    if (contributors.length > 0) {
      localStorage.setItem("contributors", JSON.stringify(contributors));
    }
  }, [contributors]);

 const handleContribute = async () => {
    if (!amount || isSubmitting) {
      setTxError("Please enter an amount");
      return;
    }

    if (!isConnected) {
      setTxError("Please connect your wallet first");
      return;
    }

    try {
      setIsSubmitting(true);
      setTxError("");

      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install Metamask.");
      }

     
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      
      const transactionRequest = {
        from: address,
        to: walletAddress,
        value: parseEther(amount).toString(16), 
        data: '0x', 
      };

    
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionRequest],
      });

      
      const waitForTransaction = async () => {
        try {
          const receipt = await window.ethereum.request({
            method: 'eth_getTransactionReceipt',
            params: [txHash],
          });

          if (receipt) {
            if (addName && name) {
              const newContributor = {
                name,
                twitterHandle,
                amount,
                timestamp: new Date().toISOString(),
                txHash,
              };
              setContributors((prev) => {
                const updatedContributors = [...prev, newContributor];
                localStorage.setItem("contributors", JSON.stringify(updatedContributors));
                return updatedContributors;
              });

             
              setName("");
              setTwitterHandle("");
              setAmount("");
              setAddName(false);
            }
            setIsSubmitting(false);
            return;
          }

    
          setTimeout(waitForTransaction, 2000);
        } catch (error) {
          console.error("Error checking transaction:", error);
          throw error;
        }
      };

     
      waitForTransaction();
    } catch (error) {
      console.error("Transaction failed:", error);
      setTxError(error.message || "Transaction failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(walletAddress);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCheckboxChange = (type) => {
    if (type === "copy") {
      setShowQRCode(!showQRCode);
      setAddName(false);
    } else if (type === "addName") {
      setAddName(!addName);
      setShowQRCode(false);
    }
  };

  const renderContributionForm = () => {
    return (
      <div className="flex flex-col items-center space-y-4 mt-4 w-full px-4 md:px-0">
        {addName && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full md:w-[500px] rounded"
            />
            <input
              type="text"
              placeholder="Twitter Handle"
              value={twitterHandle}
              onChange={(e) => setTwitterHandle(e.target.value)}
              className="border border-gray-300 p-2 w-full md:w-[500px] rounded"
            />
            <input
              type="number"
              placeholder="Amount in ETH"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 p-2 w-full md:w-[500px] rounded"
              step="0.01"
            />
          </>
        )}

        <ConnectKitButton.Custom>
          {({ isConnected, show }) =>
            isConnected ? (
              <ContributeButton
                onClick={handleContribute}
                disabled={!amount || isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Contribute"}
              </ContributeButton>
            ) : (
              <StyledButton onClick={show}>Connect Wallet</StyledButton>
            )
          }
        </ConnectKitButton.Custom>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Blockfuse Labs - Donate</title>
        <meta
          name="description"
          content="Support innovation in blockchain technology by donating to Blockfuse Labs. Your contribution helps us build decentralized solutions and open-source tools that empower communities and developers."
        />
        <meta
          property="og:title"
          content="Donate to Blockfuse Labs - Empowering Blockchain Innovation"
        />
        <meta
          property="og:description"
          content="Join us in advancing the future of blockchain. Your donation supports Blockfuse Labs' mission to create impactful open-source projects and decentralized applications for a global community."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="h-full flex flex-col items-center justify-center px-4 py-36 relative">
        <section className="relative flex items-center justify-center min-h-[50vh] md:h-[80vh] px-4 py-8 md:px-16 md:py-16">
          <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
            <img
              src={Circles}
              alt="Background circles"
              className="w-full h-auto max-w-[600px]"
            />
          </div>

          <div className="relative text-center z-10">
            <h1 className="text-3xl md:text-6xl dark:text-white">
              Donate to{" "}
              <span className="text-purple-500 font-bold">Blockfuse Labs</span>
            </h1>
            <p className="mt-4 text-base md:text-xl dark:text-gray-300">
              Contribute to the development of blockchain technology.
            </p>
          </div>
        </section>

        <div className="relative flex items-center justify-center mb-16 w-full">
          <div className="absolute left-[20%] z-0 dark:bg-[#1A1A1A] bg-gray-100 w-72 h-80 border border-purple-500 hidden lg:block">
            <img src={Flower} alt="Flower Icon" className="w-48" />
          </div>

          <div className="relative z-10 dark:bg-[#1A1A1A] bg-gray-100 p-4 md:p-10 border border-purple-500 w-full md:w-[600px] h-auto min-h-[500px] shadow-lg flex flex-col justify-center items-center space-y-6 mx-4 md:mx-0">
            <h2 className="text-purple-500 text-2xl md:text-3xl font-semibold mb-6 text-center">
              Support Blockfuse Labs
            </h2>

            {showQRCode && (
              <div className="flex flex-col items-center">
                <QRCodeCanvas
                  value={walletAddress}
                  size={128}
                  className="mb-4"
                />
                <div className="flex items-center space-x-2">
                  <span className="dark:text-white text-gray-800 text-xs md:text-sm break-all px-2">
                    {walletAddress}
                  </span>
                  <button onClick={copyToClipboard} className="text-purple-500">
                    <Copy className="w-5 h-5" />
                  </button>
                  {copied && (
                    <span className="text-sm text-green-500">Copied!</span>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col md:flex-row items-center dark:text-white space-y-2 md:space-y-0 md:space-x-4">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={showQRCode}
                  onChange={() => handleCheckboxChange("copy")}
                />
                Copy address Instead
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={addName}
                  onChange={() => handleCheckboxChange("addName")}
                />
                Add name as sponsor
              </label>
            </div>

            {renderContributionForm()}

            {txError && (
              <div className="text-red-500 text-sm mt-2 px-4 text-center">
                {txError}
              </div>
            )}
          </div>

          <div className="absolute right-[20%] z-0 dark:bg-[#1A1A1A] bg-gray-100 w-72 h-80 border border-purple-500 hidden lg:flex items-center justify-center">
            <img src={Logo} alt="Blockfuse Logo" className="w-28" />
          </div>
        </div>

        {contributors.length > 0 && (
          <CarouselContainer className="w-full mt-8 overflow-hidden px-4">
            <h3 className="text-center text-xl font-semibold mb-4 dark:text-white">
              Wall of Heroes (Sponsors)
            </h3>
            <div className="relative w-full overflow-hidden">
              <div className="animate-scroll">
                {contributors.map((contributor, index) => (
                  <div
                    key={`${index}-${contributor.timestamp}`}
                    className="inline-block p-2 bg-purple-200 text-purple-800 px-4 text-sm md:text-base"
                  >
                    {contributor.name}
                    {contributor.twitterHandle &&
                      ` (@${contributor.twitterHandle})`}
                  </div>
                ))}
              </div>
            </div>
          </CarouselContainer>
        )}
      </div>
    </>
  );
};

export default Donate;
