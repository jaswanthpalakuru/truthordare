import React, { useState, useEffect } from 'react';
import Card from './Card';
import questions from "../../src/questions.json";
import PlayerName from './PlayerName';
import Question from './Question';



function Home() {
    const [player, setPlayer] = useState([]);
    const [place, setPlace] = useState("Player Name");
    const [rollDice, setRollDice] = useState(true);
    const [selectPerson, setSelectPerson] = useState("");
    const [truth, setTruth] = useState(true);
    const [question, setQuestion] = useState("");
    let playerName = React.createRef();
    function handlePlayerAdd() {
        if(playerName.current.value.length !== 0){
            setPlayer(prevState => { 
                let result = [...prevState, playerName.current.value]
                return result;
               
            });
            // setRollDice(false);
        }  
    }
    function handlePlayerDelete(a){
        setPlayer(prev =>{
        const result =  [...prev];
         result.splice(a,1);
         
        return result;
        });
        
    }
    useEffect(() => {
        playerName.current.value = "";
        setPlace("Player Name");
        if(player.length > 1){
            setRollDice(false);
        }
        else{
            setRollDice(true);

        }
    }, [player]);
    function handleRollClick(){
        // get random index value
        const randomIndex = Math.floor(Math.random() * player.length);

        // get random item
        const item = player[randomIndex];
        setSelectPerson(item);
        setTruth(false)
    }
    function handleQuestion(e){
        const q = e.target.id;
        const randomIndex = Math.floor(Math.random() * questions[q].length);
        // get random item
        const item = questions[q][randomIndex]
        
        setQuestion(item)
        setTruth(true)
        
        
        }


    return (
        <div className="container" style={{ marginTop: "50px" }}> 
            <h1>Truth or Dare</h1>
            <hr style={{ marginTop: "50px" }}></hr>
            <div className="container">
                <div className="row" >
                    <div className="col border-end" align="center">
                        <h5>Add Players</h5>
                        <hr></hr>
                        <div className="input-group" style={{ width: "50%" }}>
                            <input type="text" ref={playerName}  className="form-control" placeholder={place} aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={handlePlayerAdd}><i className="bi bi-plus-lg"></i></button>
                        </div>
                        {player && player.map((m, index)=><Card personName={m} playerDelete = {handlePlayerDelete} key={index} id={index}/>)}
                    </div>
                    <div className="col" align="center">
                        <h5>Roll</h5>
                        <hr></hr>
                        <button type="button" className="btn btn-primary" disabled={rollDice} onClick={handleRollClick}><i className="bi bi-dice-2" ></i> Roll The Dice</button>
                        {selectPerson && <PlayerName personName={selectPerson}/>}
                        <div className="row" style={{marginTop: "25px"}}>
                            <div className="col" align="right">
                                <button type="button" id="truth"  onClick={handleQuestion} className="btn btn-primary" disabled={truth}>Truth</button>
                            </div>
                            <div className="col" align="left">
                                <button type="button" id="dare" onClick={handleQuestion} className="btn btn-primary" disabled={truth}>Dare</button>
                            </div>
                            {question && <Question questionName={question}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
