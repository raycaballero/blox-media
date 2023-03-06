import React from "react"
import { motion } from "framer-motion"

const FadeIn = ({
    children,
    startX,
    startY,
    initialOpacity = 0,
    duration = 1,
    delay = 0,
}) => {
    const variants = {
        visible: {
            opacity: 1,
            transition: {
                // type: "spring",
                duration,
                delay,
            },
            x: 0,
            y: 0,
        },
        hidden: {
            opacity: initialOpacity,
            x: startX,
            y: startY,
        },
    }

    return (
        <motion.div
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            whileInView="visible"
            viewport={{
                once: false,
            }}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn
