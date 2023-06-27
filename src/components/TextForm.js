import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
      console.log("uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase","success");
  }
  const handleloClick=()=>{
    console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
}

  const handleClear=()=>{
    let newText = "";
    setText(newText);
  }

  const handleSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className='container'  style = {{color: props.mode==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea  className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode==='dark'? 'white' : 'white' , color: props.mode==='dark'? 'black' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className={`btn btn-${props.mode==='dark' ? 'primary' : 'dark'} mx-1 my-1`}    onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length===0} className={`btn btn-${props.mode==='dark' ? 'primary' : 'dark'} mx-1 my-1`}   onClick={handleloClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className={`btn btn-${props.mode==='dark' ? 'primary' : 'dark'} mx-1 my-1`}   onClick={handleClear}>Clear</button>
        <button disabled = {text.length===0} className={`btn btn-${props.mode==='dark' ? 'primary' : 'dark'} mx-1 my-1`}   onClick={handleSpace}>Remove Extra Space</button>
    </div>
    <div className= 'container my-3'  style = {{color: props.mode==='dark'? 'white' : 'black'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} avg mins take to read</p>
      <h3>Preview</h3>
      {/*<p>{text}</p>*/}
      <p>{text.length>0?text:"Enter something above to preview it here"}</p>
    </div>
    </>
  )
}
