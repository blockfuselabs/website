import React, { useState } from 'react';
import Logo from "../assets/images/blockfuse-logo.png";
import Flower from "../assets/svgs/flower.svg";
import Circles from "../assets/svgs/circles.svg";
import { QRCodeCanvas } from 'qrcode.react';
import { MoveRight, Copy } from "lucide-react";
import { Web3Provider } from "../components/WalletConnect/Web3Provider";
import { ConnectKitButton } from "connectkit";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { parseEther, createWalletClient, custom } from 'viem';
import styled from "styled-components";


const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  width: 400px;
  color: #7C3AED;
  background: #000;
  border: 1px solid #7C3AED;
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
`;

const ContributeButton = styled(StyledButton)`
  margin-top: 1rem;
  background: #7C3AED;
  color: #000;
`;

// carousel animation
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
    animation: scroll 50s linear infinite;
    white-space: nowrap;
  }

  /* Add hover pause */
  &:hover .animate-scroll {
    animation-play-state: paused;
  }

  /* Make sure content repeats */
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

  const handleContribute = async () => {
    if (!amount || isSubmitting || !window.ethereum) {
      setTxError("Please connect your wallet and enter an amount");
      return;
    }
    
    try {
      setIsSubmitting(true);
      setTxError("");

      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Create transaction request
      const transactionRequest = {
        from: address,
        to: walletAddress,
        value: parseEther(amount).toString(16), // Convert to hex
      };

      // Send transaction using window.ethereum
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionRequest],
      });

      // Wait for transaction confirmation
      const checkTransaction = async () => {
        const tx = await window.ethereum.request({
          method: 'eth_getTransactionReceipt',
          params: [txHash],
        });

        if (tx) {
          // Transaction confirmed
          if (addName && name) {
            const newContributor = {
              name,
              twitterHandle,
              amount,
              timestamp: new Date().toISOString(),
              txHash,
            };
            setContributors(prev => [...prev, newContributor]);
            
            // Reset form
            setName("");
            setTwitterHandle("");
            setAmount("");
          }
          return true;
        }
        
        // Check again in 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        return checkTransaction();
      };

      await checkTransaction();
      
    } catch (error) {
      console.error("Transaction failed:", error);
      setTxError(error.message || "Transaction failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToThirdwebInput = () => {
    setCopied(true);
    navigator.clipboard.writeText(walletAddress);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCheckboxChange = (type) => {
    if (type === 'copy') {
      setShowQRCode(!showQRCode);
      setAddName(false);
    } else if (type === 'addName') {
      setAddName(!addName);
      setShowQRCode(false);  
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center px-4 py-36 relative">
    <section className="relative flex items-center justify-center h-full px-6 py-3 sm:px-8 md:px-16 lg:px-24">
      <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
     
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
  
        {showQRCode && (
          <>
            <div className="flex flex-col items-center">
              <QRCodeCanvas value={walletAddress} size={128} className="mb-4" />
              <div className="flex items-center space-x-2">
                <span className="dark:text-white text-gray-800 text-sm">{walletAddress}</span>
                <button onClick={copyToThirdwebInput} className="text-purple-500">
                  <Copy className="w-5 h-5" />
                </button>
                {copied && <span className="text-sm text-green-500">Address copied!</span>}
              </div>
            </div>
          </>
        )}
  
        <div className="flex items-center dark:text-white space-x-4">
          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={showQRCode}
              onChange={() => handleCheckboxChange('copy')}
            />
            Copy address Instead
          </label>
          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={addName}
              onChange={() => handleCheckboxChange('addName')}
            />
            Add name as sponsor
          </label>
        </div>
  
        {/* Name and Twitter handle input fields */}
        {addName && (
          <div className="flex flex-col items-center space-y-4 mt-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-[500px]"
            />
            <input
              type="text"
              placeholder="Twitter Handle"
              value={twitterHandle}
              onChange={(e) => setTwitterHandle(e.target.value)}
              className="border border-gray-300 p-2 w-[500px]"
            />
  
            {/* Amount input field and Contribute button */}
            {isConnected && (
              <>
                <input
                  type="number"
                  placeholder="Amount in ETH"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border border-gray-300 p-2 w-[500px]"
                  step="0.01"
                />
  
  <ContributeButton
  onClick={handleContribute}
  disabled={!amount || isSubmitting}
  style={{
    color: '#7C3AED',
    backgroundColor: '#000', 
    border: '2px solid #7C3AED',
    padding: '10px 20px',
    fontSize: '1rem',
    width: '500px',
    cursor: 'pointer',
    opacity: !amount || isSubmitting ? 0.6 : 1, 
    transition: 'transform 0.2s ease', 
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
>
  {isSubmitting ? 'Donating...' : 'Donate'}
</ContributeButton>

              </>
            )}
          </div>
        )}
  
        {txError && (
          <div className="text-red-500 text-sm">
            {txError}
          </div>
        )}
      </div>
  
      <div className="absolute -right-64 z-0 dark:bg-[#1A1A1A] bg-gray-100 w-72 h-80 border border-purple-500 flex items-center justify-center">
        <img src={Logo} alt="Blockfuse Logo" className="w-28" />
      </div>
    </div>
  
    {/* Updated Contributors carousel */}
    {contributors.length > 0 && (
      <CarouselContainer className="w-full mt-8 overflow-hidden">
        <h3 className="text-center text-xl font-semibold mb-4 dark:text-white">
          Wall of Heroes (Sponsors)
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="animate-scroll">
            {[...contributors, ...contributors].map((contributor, index) => (
              <div
                key={`${index}-${contributor.timestamp}`}
                className="inline-block p-2 bg-purple-200 text-purple-800 px-4"
              >
                {contributor.name} 
                {contributor.twitterHandle && ` (@${contributor.twitterHandle})`}
              </div>
            ))}
          </div>
        </div>
      </CarouselContainer>
    )}
  </div>
  );
  
  
};

export default Donate;