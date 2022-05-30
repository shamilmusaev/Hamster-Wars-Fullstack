import React from "react";
import "./Battle.css";
import { useEffect, useState } from "react";


const Battle = () => {
    const [leftWinner, setLeftWinner] = useState(false);
    const [rightWinner, setRightWinner] = useState(false);
    const [random1, setRandom1] = useState(null);
    const [random2, setRandom2] = useState(null);
    const [description, setDescription] = useState(false);

    useEffect(() => {
        async function getRandomHamster(random) {
            const response = await fetch("/hamsters/random", { method: "GET" });
            const data = await response.json();
            random(data);
        }

        getRandomHamster(setRandom1);
        getRandomHamster(setRandom2);
    }, []);

    const nextRound = () => {
        setDescription(false)
        async function getRandomHamster(random) {
            const response = await fetch("/hamsters/random", { method: "GET" });
            const data = await response.json();
            random(data);
        }

        getRandomHamster(setRandom1);
        getRandomHamster(setRandom2)
    };



  
    // Vinnande hamster
    async function Winner(winner) {
        const winnerUpdate = {
            wins: winner.wins + 1,
            games: winner.games + 1,
        };

        await fetch("/hamsters/" + winner.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(winnerUpdate),
        });
    }

    //Förlorande hamster

    async function Loser(loser) {
        const loserUpdate = {
            defeats: loser.defeats + 1,
            games: loser.games + 1,
        };

        await fetch("/hamsters/" + loser.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loserUpdate),
        });
    }





    const randomHamsterLeft = () => {
        if (!random1 || !random2) return;
        setDescription(true);
        setRightWinner(true);
        let winner = {
            ...random1,
            wins: random1.wins + 1,
            games: random1.games + 1,
        };
        let loser = {
            ...random2,
            defeats: random2.wins + 1,
            games: random2.games + 1,
        };
        setRandom1(winner);
        setRandom2(loser);
        Winner(random1);
        Loser(random2);

        console.log(winner, loser);
    };

    const randomHamsterRight = () => {
        if (!random2 || !random1) return;
        setDescription(true);
        setLeftWinner(true);
        let winner = {
            ...random2,
            wins: random2.wins + 1,
            games: random2.games + 1,
        };
        let loser = {
            ...random1,
            defeats: random1.defeats + 1,
            games: random1.games + 1,
        };
        Winner(random2);
        Loser(random1);
        setRandom2(winner);
        setRandom1(loser);
        

        
    };
    return (
        <main className="container-battle">


    {/* Hamster nummer 1 */}


            {random1 ? (
                <div
                    className="container1"
                    key={random1.id}
                    onClick={randomHamsterLeft}
                >

                    <img src={`img/${random1.imgName}`} alt="hamster" />


                    <div className="description">
                        <h2>{random1.name}</h2>
                        <p>{random1.age} år</p>
                        <p>Favoritmat: {random1.favFood}</p>
                        <p>Gillar att: {random1.loves}</p>
                    </div>



                    {description ? (
                        <div>
                            <div className="result">
                                {leftWinner ? <h3>I LOST</h3> : <h2>I WON</h2>}{" "}
                            </div>
                            <h3>Vinster: {random1.wins}</h3>{" "}
                            <h3>Förluster: {random1.defeats}</h3>
                        </div>

                    ) : (
                        <div className="voteresult"> CLICK ON HAMSTER TO VOTE</div>
                    )}
                </div>
            ) : (
                " API"
            )}









            <button className="match-btn" onClick={() => nextRound() & window.location.reload(false)}>
                Next round
            </button>





    {/* Hamster nummer 2 */}


            {random2 ? (
                <div
                    className="container2"
                    key={random2.id}
                    onClick={randomHamsterRight}
                >



                    <img src={`img/${random2.imgName}`} alt="hamster" />

                    <div className="description">
                        <h2>{random2.name}</h2>
                        <p>{random2.age} år</p>
                        <p>Favoritmat: {random2.favFood}</p>
                        <p>Gillar att: {random2.loves}</p>
                    </div>
                    {description ? (
                        <div>
                            <div className="result">
                                {rightWinner ? <h3>I LOST THIS BATTLE</h3> : <h2>I WON</h2>}
                            </div>
                            <h3>Vinster: {random2.wins}</h3>{" "}
                            <h3>Förluster: {random2.defeats}</h3>
                        </div>
                    ) : (
                        <div className="voteresult"> CLICK ON HAMSTER TO VOTE</div>
                    )}
                </div>
            ) : (
                "API"
            )}
        </main>
    );
};

export default Battle;