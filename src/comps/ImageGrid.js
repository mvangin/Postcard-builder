import React from "react"
import useFirestore from "../hooks/useFirestore";
import RemoveFirestoreImg from "../hooks/RemoveFirestoreImg"
import { motion } from "framer-motion";

const ImageGrid = ({ setModal, setSelectedImg, handleClick }) => {
    const { docs } = useFirestore('images');

    function handleRemove(collection, id) {
        RemoveFirestoreImg(collection, id)
    }

    function noDocs() {
            if (docs.length < 1) {
                console.log("nothin")
                return <div style={{ gridColumn: "1 / span 4", gridRow: "3", color: "white", fontSize: "5rem", margin: "0 auto", textAlign: "center" }}> Please Upload an Image </div>
            }
            return null;
        }
    
    return (
        <div className="img-grid" onClick={handleClick}>
            {docs && docs.map(doc => (
                <motion.div className="img-wrap"
                    layout
                    whileHover={{ opacity: 1 }}
                    key={doc.id}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        onClick={() => {
                            setSelectedImg(doc.url);
                            setModal(false)
                        }}
                    />
                    <div className="removeImage" onClick={() => handleRemove('images', doc.id)}>
                        x
                    </div>

                </motion.div>


            ))}

            {setTimeout(noDocs, 2000) }

        </div>

    )

}

export default ImageGrid;