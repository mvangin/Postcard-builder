import React from "react"
import {motion} from "framer-motion"
import ImageGrid from "./ImageGrid"
const Modal = ({ setModal, setSelectedImg}) => { 

    function handleClick(e){
        if (e.target.classList.contains('img-grid') || e.target.classList.contains('backdrop')){
            setModal(false)
        }
    }

    return (
        <>
            {
                <motion.div className="backdrop" onClick={handleClick}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                >
                    <motion.div
                    initial={{y:"-100vh"}}
                    animate={{y:"0"}}
                    >
                    <ImageGrid setSelectedImg={setSelectedImg} setModal={setModal} handleClick={handleClick} />
                    </motion.div>
                </motion.div>
            }
        </>

    )
}

export default Modal;

