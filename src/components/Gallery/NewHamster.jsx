import { useState, React } from 'react'
import Api from '../../Api'
import "./NewHamster.css"




const NewHamster = () => {
    const [name, setName] = useState("");
    










    const sendForm =  (e) => {
        e.preventDefault();
       
        fetch('http://localhost:1995/hamsters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        }) .then(() => {
            console.log("new hamster added");
        })

    
    };



    return (
        <>
            <div className="container-box">
                <h2>Add new Hamster</h2>
                <form onSubmit={sendForm}>
                    <div className="user-box">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={name}
                        />
                        <label>Name</label>
                        
                    </div>






                    <button
                       
                        onClick={sendForm}
                       
                    >
                        Add Hamster
                    </button>
                </form>
            </div>
        </>
    )
}

export default NewHamster