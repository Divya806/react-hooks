import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import HookCounter from './Components/HookCounter';
import StateCounter from './Components/StateCounter';
import StateCounter2 from './Components/StateCounter2';
import Name from './Components/Name';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HookCounter />
    <StateCounter />
    <StateCounter2 />
    <Name />
  </React.StrictMode>
);

