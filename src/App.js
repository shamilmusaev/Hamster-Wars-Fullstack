import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home"
import Battle from "./components/Battle/Battle"
import Gallery from "./components/Gallery/Gallery"



import './App.css';
import NewHamster from './components/Gallery/NewHamster';


  
function App() {
  return (
    <div className="App" >
      
            <Router>
               
                <header className="header">
                 
                    <Navbar />
                </header  >

                <main >
                    <Routes>
                       
                        <Route path="/battle" element={<Battle />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/newhamster" element={<NewHamster />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </Router>
        </div>
  );
}
  
export default App;