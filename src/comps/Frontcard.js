import React, {useState} from "react"

function Frontcard() {
    const MESSAGELIMIT = 200;
    const ADDRESSLIMIT = 80;

    const [stamp, setStamp] = useState("/stamp.jpg")
    
    const [message, setMessage] = useState(localStorage.getItem("messageText") || "")
    const [address, setAddress] = useState(localStorage.getItem("addressText") || "")

    const [messageTally, setMessageTally] = useState(localStorage.getItem("messageTally") || "")
    const [addressTally, setAddressTally] = useState(localStorage.getItem("addressTally") || "")


    function calculate(currText, limit) {
        if (currText.length >= limit) {
            currText = currText.slice(0, limit)
        }
        let currTally = currText.length;
        return [currText, currTally];
    }

    function messageChange(e){
        const [currText, currTally] = calculate(e.target.value, MESSAGELIMIT)
        setMessage(currText);
        setMessageTally(currTally);
        localStorage.setItem('messageText', currText)
        localStorage.setItem('messageTally', currTally)
    }

    function addressChange(e){
        const [currText, currTally] = calculate(e.target.value, ADDRESSLIMIT)
        setAddress(currText);
        setAddressTally(currTally);
        localStorage.setItem('addressText', currText)
        localStorage.setItem('addressTally', currTally)
    }

    return (
        <div className="postCardContainerFront">
            <div className="stamps">
                <div>
                    Select Stamp <br />
                    <span style={{ fontSize: "2rem", fontWeight: "bold" }}> &#8659; </span>
                </div>
                <img src="/stamp2.jpg" alt="stamp" onClick={(e) => setStamp(e.target.src)} style={{ width: "80px" }} />
                <img src="/stamp3.jpg" alt="stamp" onClick={(e) => setStamp(e.target.src)} style={{ width: "80px" }} />
                <img src="/stamp4.jpg" alt="stamp" onClick={(e) => setStamp(e.target.src)} style={{ width: "80px" }} />
                <img src="/stamp5.jpg" alt="stamp" onClick={(e) => setStamp(e.target.src)} style={{ width: "80px" }} />
            </div>

            <div className="post">
                <div className="message">
                    <textarea value={message} placeholder="add message here" onChange={messageChange} />
                    <span className="line line1"> </span>
                    <span className="line line2">  </span>
                    <span className="line line3">  </span>
                    <span className="line line4">  </span>
                    <span className="line line5">  </span>
                    <span className="line line6">  </span>
                    <span className="line line7">  </span>
                    <span>{`${messageTally}/${MESSAGELIMIT}`} </span>
                </div>

                <div className="address" >
                    <textarea value={address} placeholder="Address here" onChange={addressChange} />
                    <span className="line line1"> </span>
                    <span className="line line2">  </span>
                    <span className="line line3">  </span>
                    <span className="line line4">  </span>
                    <span> {`${addressTally}/${ADDRESSLIMIT}`} </span>

                </div>
                <div className="stamp">
                    <img src={stamp} alt="stamp" />
                </div>
            </div>
        </div>
    )
}

export default Frontcard