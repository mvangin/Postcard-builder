import React, {useEffect, useState} from "react"

function useTextLimit(textTitle) {
    const [text, setText] = useState(localStorage.getItem([textTitle]) || "");
    const [remaining, setRemaining] = useState(text.length);

    useEffect(()=> {
        setRemaining(text.length)
    },[text])

    function calculate(currText, limit) {
        if (currText.length >= limit) {
            currText = currText.slice(0, limit)
        }
        setRemaining(currText.length)
        setText(currText);
        localStorage.setItem([textTitle], currText)
    }

    
    return [text, remaining, calculate]
}

export default useTextLimit;