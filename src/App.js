import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./assets/scss/main.scss";
import React from 'react';
import Routers from "./router/Index";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routers />
      <ToastContainer />
    </div>
  );
}

export default App;
