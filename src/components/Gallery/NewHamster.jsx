import React from 'react'
import "./NewHamster.css"

function NewHamster() {
  return (
    <div className='form-container'>
    
    <form>
                    <div className="user-box">
                        <input
                            type="text"
                        />
                        <label>Name</label>
                        
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            
                        />
                        
                        <label>Age</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            
                        />
                        <label>Favorite food</label>
                       
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            
                        />
                        <label>What do your hamster love?</label>
                       
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            
                        />
                        <label>Hamster image</label>
                       
                    </div>
                    <a
                        type="submit"
                        
                    >
                        Add Hamster
                    </a>
                </form>

        
    </div>
  )
}

export default NewHamster