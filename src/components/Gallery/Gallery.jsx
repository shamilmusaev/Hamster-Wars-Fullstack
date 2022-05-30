import React from 'react'
import { useEffect, useState } from 'react';
import HamsterCard from './HamsterCard.jsx'
import "./Gallery.css"

function Gallery() {

  const [hamsters, setHamsters] = useState([]);
  
  useEffect(() => {
    getHamsters()   
        }, [])
        async function getHamsters() {
            const response = await fetch('/hamsters', {method: 'GET'})
            const data = await response.json()
            setHamsters(data)
        }
        async function removeHamster(id) {
            await fetch("/hamsters/" + id, { method: 'DELETE' })
           getHamsters()
        }
      
  
  
  return (






    <div className="gallery-container">

		{ hamsters.map(hamster => (
			<div className="gallery-container-child" key={ hamster.id  }>
      <button className="delete-hamster" onClick={() => removeHamster(hamster.id)}> <i class="fa fa-trash-o" ></i></button>
      <HamsterCard hamster = {hamster}/>
      </div> 
		))
	  }

	</div>










	)}
  


export default Gallery;