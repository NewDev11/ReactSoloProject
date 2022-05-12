import React, {useState} from 'react'
const Forms = ({setUserInput}) => {
    const [textValue, setTextValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInput(textValue)
    
    }
    return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={textValue} onChange={(e)=> setTextValue(e.target.value)} />
        <input type="submit" />
    </form>
    </>
    )
}

export default Forms