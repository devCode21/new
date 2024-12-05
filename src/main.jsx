import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfilePage from './pages/ErrorFix/ErrorFix.jsx'
import DesignPage from './pages/DesignPage/DesignPage.jsx'
import BackendOutputPage from './pages/Backend/Backend.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    
  
   <BackendOutputPage/>
   
  </StrictMode>,
)
