import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import logohamster from './logohamster.png'
function Home() {
    return (



        <div className="full-container">
            
                <img src={logohamster} className="img-style"/>
           

            <div className="container">
                <h2>Vote for the cutest hamster</h2>
              
            </div>

            <Link className="begin-btn" to="/battle">
                        BEGIN BATTLE
                    </Link>
        </div>

    );
}

export default Home;
