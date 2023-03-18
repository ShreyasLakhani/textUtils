import React, {useState} from 'react'


export default function Textarea(props) {

    const upCase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }       

    const lowCase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const clearText = () =>{
        // let newText = text.toLowerCase();
        setText("")
    }

     const copyText = () =>{
         let text = document.getElementById("mybox");
         text.select.value();
         navigator.clipborad.writeText(text.value);
     }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control " id="mybox" rows="8"  value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode === 'light' ? 'white':'#343a40', color: props.mode === 'dark' ? 'white':'black'}}></textarea>
        
        <button className="btn btn-primary mx-5 my-3" type="submit" onClick={upCase}>upperCase</button>
        <button className="btn btn-primary mx-5" type="submit" onClick={lowCase}>lowerCase</button>
        <button className="btn btn-primary mx-5" type="submit" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-5" type="submit" onClick={copyText}>Copy Text</button> */}
        </div>

        <div className="summery"></div>
        <h1>Your Text Summery</h1>
        <p> {text.split(" ").length} Word and {text.length} Characters</p>
        <p> {0.008*text.split(" ").length} Minutes to Read above Text </p>
        <h2>Preview</h2>
        <p> { text} </p>
        </div>
        </>
    )
}
