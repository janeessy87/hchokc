import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { AllRoutes } from "./routes/AllRoutes";

import "../src/app.css"

function App() {
  return (
    <div>
    <Header />
        
        <AllRoutes />
    
    <Footer />
      
      </div>
  );
}

export default App;