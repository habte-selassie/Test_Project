import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import Navigation from "./web-components/Navigation";
import About from "./web-components/About";
import Body from "./web-components/Body";
import Stories from "./web-components/Stories";
import Footer from "./web-components/Footer";
import PrivacyPolicy from "./web-components/Privacy-Policy";
import Advertisment from "./web-components/Advertisment";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Navigation/> */}
  {/* <About/> */}
  {/* <Body/> */}
  {/* <Stories/> */}
  {/* <Footer/> */}
  {/* <PrivacyPolicy /> */}
  <Advertisment/>
</React.StrictMode>
);

