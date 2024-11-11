import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThirdwebProvider } from "thirdweb/react"; 
import { client } from "./components/SocialAuth/Client"; 


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5,
    },
  },
})

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <ThirdwebProvider client={client}>
       <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </ThirdwebProvider>
  </StrictMode>,
)
