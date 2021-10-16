import React from 'react'

function PlayerName(props) {
    return (
        <div style={{marginTop:"25px"}}>
            <div className="input-group" style={{ width: "50%" }}>
                <input type="text" className="form-control" value={props.personName} aria-label="Recipient's username" aria-describedby="button-addon2" />
             </div>
        </div> 
    )
}

export default PlayerName
