import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav style={{ backgroundImage: "url(/img/stars.jpeg)" }}>
                <ul>
                <Link className="nav-item" to="/">
                        Home
                    </Link>
                    <Link className="nav-item" to="/battle">
                        Battle
                    </Link>
                    <Link className="nav-item" to="/gallery">
                        Gallery
                    </Link>
                    <Link className="nav-item" to="/newhamster">
                        Add new hamster
                    </Link>
                    
                   
                    
                </ul>
            </nav>
        </>
    );
};

export default Navbar;