import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigatorStack } from './Components/navigator/navigator-stack.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NavigatorStack/> */}
    <App/>
  </StrictMode>,
)
