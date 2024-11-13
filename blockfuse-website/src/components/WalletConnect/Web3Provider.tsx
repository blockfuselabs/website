import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(import.meta.env.VITE_ALCHEMY_MAINNET_URL),
      [sepolia.id]: http(import.meta.env.VITE_ALCHEMY_SEPOLIA_URL),
    },

    // Required API Keys
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,

    
    appName: "Blockfuse Labs",

    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co",
    appIcon: "https://family.co/logo.png",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <ConnectKitProvider theme="default" mode="dark"
        options={{
          embedGoogleFonts: true,
          
        }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
