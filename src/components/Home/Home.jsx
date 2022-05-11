import React from "react";
import "./Home.css"
import logohamster from './logohamster.png'
function Home() {
    return (



        <div className="full-container">
            
                <img src={logohamster} className="img-style"/>
           

            <div className="container">
                <h2>Vote for the cutest hamster</h2>
              
            </div>

            <button>click here to begin</button>
        </div>

    );
}

export default Home;
