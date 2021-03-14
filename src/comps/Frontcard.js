import React, {useState} from "react"
import useTextLimit from "../hooks/useTextLimit"

function Frontcard() {
    const MESSAGELIMIT = 200;
    const ADDRESSLIMIT = 80;

   // const [address, setAddress] = useState("");
   // const [message, setMessage] = useState("");
    //const [messageRemain, setMessageRemain] = useState(MESSAGELIMIT);
    //const [addressRemain, setAddressRemain] = useState(ADDRESSLIMIT);

    const [stamp, setStamp] = useState("/stamp.jpg")

    
    const [message, messageRemain, messageChange] = useTextLimit(MESSAGELIMIT);
    const [address, addressRemain, addressChange] = useTextLimit(ADDRESSLIMIT);
    
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
                    <textarea value={message} placeholder="add message here" onChange={(e)=>messageChange(e.target.value, MESSAGELIMIT)} />
                    <span className="line line1"> </span>
                    <span className="line line2">  </span>
                    <span className="line line3">  </span>
                    <span className="line line4">  </span>
                    <span className="line line5">  </span>
                    <span className="line line6">  </span>
                    <span className="line line7">  </span>
                    <span>{`${messageRemain}/${MESSAGELIMIT}`} </span>
                </div>

                <div className="address" >
                    <textarea value={address} placeholder="Address here" onChange={(e)=>addressChange(e.target.value, ADDRESSLIMIT)} />
                    <span className="line line1"> </span>
                    <span className="line line2">  </span>
                    <span className="line line3">  </span>
                    <span className="line line4">  </span>
                    <span> {`${addressRemain}/${ADDRESSLIMIT}`} </span>

                </div>
                <div className="stamp">
                    <img src={stamp} alt="stamp" />
                </div>
            </div>
        </div>
    )
}

export default Frontcard