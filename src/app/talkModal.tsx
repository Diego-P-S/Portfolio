/* eslint-disable react/no-unescaped-entities */
import {
    Modal,
    ModalContent,
    ModalHeader,
    Flex,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Text,
} from "@chakra-ui/react"
import Typewriter from "../components/TypeWriter"
import { useState } from "react"

interface Props {
    isOpen: boolean
    onClose: () => void
}
const TalkModal = ({ isOpen, onClose }: Props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
        e.preventDefault()
        if (name === "" || email === "" || message === "") {
            alert("Fill in all the fields!")
        } else {
            const subject = encodeURIComponent(`${name} - ${email}`)
            const body = encodeURIComponent(message.replace(/\n/g, "%0D%0A")) // Replace newline characters with %0D%0A for proper newline display in email body
            window.open(`mailto:diegosantosmtd@gmail.com?subject=${subject}&body=${body}`, "_blank")
            onClose()
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent color="black" justifyContent="center" margin="auto">
                <ModalHeader>
                    <Flex flexDir="column">
                        <Flex align="center">
                            <Text color="#ff6b31">LET'S TALK?</Text>
                        </Flex>
                        <Typewriter text="Send me a message and I will reply to you ASAP" speed={50} />
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" onChange={(e) => setName(e.target.value)} value={name} />

                        <FormLabel marginTop="10px">E-mail</FormLabel>
                        <Input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

                        <FormLabel marginTop="10px">Mensagem</FormLabel>
                        <Textarea
                            placeholder="Digite aqui..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </FormControl>
                    <Flex marginTop="20px">
                        <Button borderColor="#ff6b31" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            // href={`mailto:diegosantosmtd@gmail.com?subject=${name} - ${email}&body=${message}`}
                            variant="ghost"
                            color="#ff6b31"
                            onClick={sendEmail}>
                            Send
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default TalkModal
