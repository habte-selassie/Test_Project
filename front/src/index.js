import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import Navigation from "./web-components/Navigation";
import About from "./web-components/About";
import Body from "./web-components/Body";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Navigation/> */}
  {/* <About/> */}
  <Body/>
</React.StrictMode>
);

