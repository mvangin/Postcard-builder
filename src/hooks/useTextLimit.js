import React, {useState} from "react"

function useTextLimit(limit) {
    const [text, setText] = useState("");
    const [remaining, setRemaining] = useState(limit);

    function calculate(currText, limit) {
        if (currText.length >= limit) {
            currText = currText.slice(0, limit)
        }
        setRemaining(limit - currText.length)
        setText(currText);
    }

    
    return [text, remaining, calculate]
}

export default useTextLimit;