import React, { useState } from 'react'

export default function EventBind() {
    //Using State Hook to manage text input
    const [text, changeText] = useState('Enter to change the text');

    //Using Event Handler to change the text state value
    const textChange = (event) => {
        changeText(event.target.value)
    }
    const convertToUpperCase = () => {
        changeText(text.toUpperCase())
    }
    const convertToLowerCase=()=>{
        changeText(text.toLowerCase())
    }

    return (
        <div>
            <div>
            <h1>Please Enter the text </h1>
            {/*changing text with the help of value*/}
            <textarea value={text} onChange={textChange}></textarea>
            <br />
            <button onClick={convertToUpperCase}>Convert to upper case</button>
            <button onClick={convertToLowerCase}>Convert to lowercase</button>
            {/* displaying in the frontend */}
            <span>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview: </h3>
                <h4>'{text}'</h4>
            </span>
            </div>
            <div>

            </div>
        </div>
    )
}
