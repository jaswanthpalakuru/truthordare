import React from 'react'

function Card({id, playerDelete, personName}) {
    
    const handleDelete = ()=>{
        playerDelete(id)
        console.log(id);
    }

    return (
        <div style={{marginTop:"25px", marginBottom:"25px"}}>
                <div className="input-group" style={{ width: "50%" }}>
                            <input type="text" className="form-control" value={personName} aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-danger" onClick={handleDelete} type="button" id="button-addon2" ><i className="bi bi-dash-lg"></i></button>
                        </div>
                </div> 
    )
}

export default Card
