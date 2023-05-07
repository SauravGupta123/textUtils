import React, { useState } from 'react';

export default function Textform(props) {
    
    const [text, setText] = useState("Enter text here");
    const handleClick=()=>{
        
        setText(text.toUpperCase());
    }
    const handleChange=(event)=>{
        console.log("change");
        setText(event.target.value)
    }
    
    return (
        <div style={{ color: props.mode.color }}>
            <div className="mb-3 ">
                <h1>CAPATILIZER</h1>
                <textarea className="form-control" value={text} style={{ color: props.mode.color, backgroundColor:props.mode.background }} 
                id="textarea" rows="9" onChange={handleChange}></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleClick}>Capatilze</div>
        </div>
    )
}
