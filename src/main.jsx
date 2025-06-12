import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChooseAmplifierPage from './pages/chooseAmplifierPage/chooseAmplifierPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    { <App /> }
   {/*<ChooseAmplifierPage/>*/} 
  </StrictMode>,
)
