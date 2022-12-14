import React, {useState} from 'react'

export default function From(props) {

    const upperCase = () =>{
        console.log("aayooo");
        setText(text.toUpperCase());   
    }
    const lowerCase = () =>{
        setText(text.toLowerCase());
    }
    const clearText = () =>{
        let newtext = '';
        setText(newtext);
    }
    const handleChange = (event)=>{
        console.log("handleChange triggered");
        setText(event.target.value); 
    }

    const [text, setText] = useState("sup bois");  
  return (
    <>
        <div className="mb-3">
            <h2 style={props.textStyle}>Enter {props.heading}</h2>  
            <textarea className="form-control" id="myBox" value={text} onChange={handleChange} rows="3" placeholder='Enter text here' style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white'}}></textarea>
        

            <button className={`btn btn-${props.buttonColor} my-3 mx-2`} onClick={upperCase}>UpperCase</button>
            <button className={`btn btn-${props.buttonColor} my-3 mx-2`} onClick={lowerCase}>LowerCase</button>
            <button className={`btn btn-${props.buttonColor} my-3 mx-2`} onClick={clearText}>Clear Text</button>
        </div>

        <div className="container my-3">
            <h1 style={props.textStyle}>text details</h1>
            <p style={props.textStyle}>
                {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
            </p>

            <h2 style={props.textStyle}>Preview</h2>
            <p style={props.textStyle}>{text}</p>
        </div>
    </>
    

  )
}
