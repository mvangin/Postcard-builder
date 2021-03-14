import React, {useState } from "react"
import UploadForm from "./UploadForm"
import Backcard from "./Backcard"
import Frontcard from "./Frontcard"

function PostCard({ selectedImg, setModal, setSelectedImg }) {
    const [frontcard, setFrontcard] = useState(true);

    return (
        <>
            {!frontcard && <UploadForm setSelectedImg={setSelectedImg} setModal={setModal}/> }

            <div className="genCardContainer">

                {!frontcard && <Backcard selectedImg={selectedImg} setModal={setModal}/>}

                {frontcard && <Frontcard/>}

                <button className="flipCard" onClick={() => { setFrontcard(!frontcard) }}>
                    <div> Flip PostCard </div>
                </button>
            </div>
        </>

    )
}




export default PostCard;