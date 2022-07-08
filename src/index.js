import  {StrictMode}  from "react";
import  {createRoot}  from "react-dom/client";
import './index.css'
import Sign from './Sign';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Sign />
  </StrictMode>,
);

