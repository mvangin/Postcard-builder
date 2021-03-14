import React, {useState} from "react"

function Frontcard({ selectedImg, setModal }) {
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [stamp, setStamp] = useState("/stamp.jpg")

    const messageLimit = 200;
    const addressLimit = 80;


    const [messageLeft, setMessageLeft] = useState(messageLimit);
    const [addressLeft, setAddressLeft] = useState(addressLimit);


    function addressChange(e) {
        let currAddress = e.target.value;

        if (currAddress.length >= addressLimit) {
            currAddress = currAddress.slice(0, addressLimit)
        }

        setAddressLeft(addressLimit - currAddress.length);
        setAddress(currAddress);
    }


    function messageChange(e) {
        let currMessage = e.target.value;

        if (currMessage.length >= messageLimit) {
            currMessage = currMessage.slice(0, messageLimit)
        }

        setMessageLeft(messageLimit - currMessage.length);
        setMessage(currMessage);
    }

    function stampClick(e) {
        setStamp(e.target.src)
    }

    return (
        <div className="postCardContainerFront">
            <div className="stamps">
                <div>
                    Select Stamp <br />
                    <span style={{ fontSize: "2rem", fontWeight: "bold" }}> &#8659; </span>
                </div>
                <img src="/stamp2.jpg" alt="stamp" onClick={(e) => stampClick(e)} style={{ width: "80px" }} />
                <img src="/stamp3.jpg" alt="stamp" onClick={(e) => stampClick(e)} style={{ width: "80px" }} />
                <img src="/stamp4.jpg" alt="stamp" onClick={(e) => stampClick(e)} style={{ width: "80px" }} />
                <img src="/stamp5.jpg" alt="stamp" onClick={(e) => stampClick(e)} style={{ width: "80px" }} />
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
                    <span>{`${messageLeft}/${messageLimit}`} </span>
                </div>

                <div className="address" >
                    <textarea value={address} placeholder="Address here" onChange={addressChange} />
                    <span className="line line1"> </span>
                    <span className="line line2">  </span>
                    <span className="line line3">  </span>
                    <span className="line line4">  </span>
                    <span> {`${addressLeft}/${addressLimit}`} </span>

                </div>
                <div className="stamp">
                    <img src={stamp} alt="stamp" />
                </div>
            </div>
        </div>
    )
}

export default Frontcard