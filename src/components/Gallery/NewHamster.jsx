import { useState } from "react";
import "./NewHamster.css";

const NewHamster = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [favFood, setFavFood] = useState("");
    const [loves, setLoves] = useState("");
    const [imgName, setImgName] = useState("");




    const sendForm = async (add) => {
        add.preventDefault();


        const stringfy = JSON.stringify({
            name: name,
            favFood: favFood,
            loves: loves,
            imgName: imgName,
            age: Number(age),
            wins: 0,
            defeats: 0,
            games: 0
           
        });
        if (name && loves && favFood && imgName && !isNaN(age)) {
            alert("Congrats! Hamster has been added." );
            await fetch("/hamsters/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: stringfy,
            }
            );
        }

    };

    return (
        <>

            <div className="form-container">

                <form>
                    <div className="container-input">
                        <input
                            type="text"
                            value={name}
                            onChange={(add) => setName(add.target.value)}
                            placeholder="Write your hamsters name"
                        />


                    </div>
                    <div className="container-input">
                        <input
                            type="text"
                            value={age}
                            onChange={(add) => setAge(add.target.value)}
                            placeholder=" And your hamsters age(For example: 2)"
                        />


                    </div>
                    <div className="container-input">
                        <input
                            type="text"
                            value={favFood}
                            onChange={(add) => setFavFood(add.target.value)}
                            placeholder="Write here hamsters favorite food"
                        />


                    </div>
                    <div className="container-input">
                        <input
                            type="text"
                            value={loves}
                            onChange={(add) => setLoves(add.target.value)}
                            placeholder="What do your hamster loves to do?"
                        />


                    </div>
                    <div className="container-input">
                        <input
                            type="text"
                            value={imgName}
                            placeholder="Your hamsters image (For example: hamster-15.jpg)"
                            onChange={(add) => setImgName(add.target.value)}
                        />


                    </div>


                </form>
                <button type="submit"
                    onClick={sendForm}
                    href="#"
                    className="addHamster-button">Add Hamster</button>
            </div>
        </>
    );
};

export default NewHamster;