import React from "react"
import { motion } from "framer-motion"

const Bounce = ({
    children,
}) => {
    return (
        <motion.div
            // initial={{ opacity: 0, scale: 0.7 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{
            //     default: {
            //         duration: .5,
            //         // ease: [0, 0.71, 0.2, 1.01],
            //     },
                // scale: {
                //     // type: "spring",
                //     damping: 5,
                //     stiffness: 100,
                //     restDelta: 0.001,
                // },
            // }}
            // viewport={{
            //     once: false,
            // }}
        >
            {children}
        </motion.div>
    )
}

export default Bounce
