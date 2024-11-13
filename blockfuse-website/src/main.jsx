import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'
=======
import App from './App.tsx'
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



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
    
       <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>

  </StrictMode>,
)