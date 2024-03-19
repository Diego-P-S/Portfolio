import { Flex, FlexProps } from "@chakra-ui/react"
import { ReactElement } from "react"

interface Props extends FlexProps {
    children: ReactElement
}

const Container = ({ children, ...props }: Props) => {
    return (
        <Flex mx="auto" my="auto" maxW={"1000px"} w="full" flexDir="column" bgColor="transparent" {...props}>
            {children}
        </Flex>
    )
}

export default Container
