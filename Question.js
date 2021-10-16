import React from 'react'

function Question(props) {
    return (
        <div>
            <div class="form-group" style={{marginTop: "25px", width: "50%"}}>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={props.questionName} rows="4"></textarea>
                
            </div>
        </div>
    )
}

export default Question
