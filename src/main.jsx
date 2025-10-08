import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor'
import { BrowserRouter } from "react-router";
createRoot(document.getElementById('root')).render(
  <>
    {/* <div className="hidden md:block">
      <SplashCursor />
    </div> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </>
)
