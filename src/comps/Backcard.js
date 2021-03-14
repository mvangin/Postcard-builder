import React from "react"

function Backcard({selectedImg, setModal}) {
    return (
        <div className="postCardContainerBack">
            <div className="post" onClick={() => { setModal(true); }} >
                {
                    selectedImg ? <img src={selectedImg} /> :
                        <p > Click here to select image</p>
                }
            </div>
        </div>
    )
}

export default Backcard;