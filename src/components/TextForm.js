import React,{useState} from 'react'



export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked : " + text);
        let newText=text.toUpperCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
        
    }
   
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked : " + text);
        let newText=text.toLowerCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick = ()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }


    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }


    const handleCopy = ()=>{
        
         var text=document.getElementById('myBox');
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Copy to Clipboard","success");
       }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Remove","success");
      }




    // const [text, setText] = useState('Enter text here');
    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{ color:props.mode === 'dark'?'white':'#042743' }}>
    
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* <label htmlFor="myBox" className="form-label">Text Editor</label> */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode === 'dark'?'grey':'white',
color: props.mode === 'dark'?'white':'#042743' }} id="myBox" rows="10"></textarea>
    </div>
    
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

               
</div>
<div className="container" style={{ color:props.mode === 'dark'?'white':'#042743' }}>
<h2>Your Text Summarry</h2>
<p>{text.split(" ").length} words and {text.length} charactrers</p>
<p>{0.008 *text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
{/* <p>{text}</p> */}
<p>{text.length>0?text:'Enter Something to Preview it here'}</p>
</div>
    
    </>
   
  )
}
