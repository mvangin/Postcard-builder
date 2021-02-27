import React, { useEffect } from "react"
import useStorage from "../hooks/useStorage"
import {motion} from "framer-motion"

const ProgressBar = ({file, setFile, setModal}) => {

    const {url, progress} = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
            setModal(true)
        }
    },[url, setFile])

    return (
        <motion.div className="progress-bar"
        initial = {{width: 0}}
        animate = {{width: progress + "%"}}
        >
        </motion.div>
    )
}

export default ProgressBar;  