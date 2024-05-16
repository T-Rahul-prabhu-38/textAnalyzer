import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("enter text here");
    const [copied,setCopied] = useState("click here to copy the text");


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        console.log("Uppercase activated!");
        setText(newText);
    };
    const HandleOnChange = (event) => {
        console.log("textbox activated!");
        setText(event.target.value);
    };
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        console.log("Lowercase activated!");
        setText(newText);
    };
    const handleReset = () => {
        let newText = "";
        console.log("reset activated");
        setText(newText);
    };

    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);
          let newText1="copied!";
          setText(newText1);
        })
        .catch((err) => {
          console.error("Error copying text:", err); // Handle errors in development
        });
    };


    return (
        <>
            <div className="ButtonsToBeClicked">

                <label htmlFor="MyBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={HandleOnChange} id="MyBox"
                    rows="10"></textarea>


                <div className="ButtonOnTheBar">

                    <button className="btn-primary" id='buttonsOnBar' onClick={handleUpClick}>Convert To
                        UpperCase</button>
                    <button className="btn-primary" id='buttonsOnBar' onClick={handleDownClick} >Convert To
                        LowerCase</button>
                    <button className="btn-primary" id='buttonsOnBar' onClick={handleReset} >Click to
                        Clear</button>

                </div>


                <div className='TextData'>
                    <h1><u>Word summary is :</u></h1>
                    <p>
                        Number of words : {text.split(" ").length - 1} <br />
                        Number of Characters : {text.length} <br />
                    </p>
                </div>
            </div>
            <div className="preview">
                <h1>Preview</h1>
                <textarea type="text" value={text} id='previewBox' readOnly />
                <button onClick={handleCopy} id='previewButton'>{copied ? "Copy" : " "}</button>
            </div>
        </>
    );
};

