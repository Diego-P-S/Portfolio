import React, { useEffect, useState } from "react"
import "./Typewriter.css" // Import CSS file for styling
import { Flex } from "@chakra-ui/react"

const Typewriter = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.substring(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return (
        <Flex alignItems={"center"} textAlign={"center"} className="Typewriter">
            {displayText}
        </Flex>
    )
}

export default Typewriter
