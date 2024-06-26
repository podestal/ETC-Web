import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import router from './routing/routes.tsx'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </QueryClientProvider>,
)
