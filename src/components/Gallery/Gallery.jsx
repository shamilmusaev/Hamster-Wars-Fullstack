import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Api from '../../Api.js'
import HamsterCard from './HamsterCard.jsx'

import "./Gallery.css"

function Gallery() {

  const [hamsterList, sethamsterList] = useState([]);
  
  useEffect(() => {
    
    Api.getAllHamsters()
    .then(data => sethamsterList(data));
  }, []);

  
  
  return (
    <div className='gallery-container'>

      <Link className="addHamster" to="/newhamster">
                Add new Hamster
      </Link>
    
   
     
    <div>
      {hamsterList.map( hamster =>  <HamsterCard hamster={hamster} />  ) }
    </div>

   
    
    
    </div>
    
    );
    
    
    
    }

export default Gallery;