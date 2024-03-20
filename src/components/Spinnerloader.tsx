import { Flex } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function SpinnerLoader() {
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowImg(false)
        }, 3000)
    }, [])

    return (
        <>
            <Flex>{showImg && <Image src="/icons/loading.gif" alt="loading" width={50} height={50} />}</Flex>
        </>
    )
}
