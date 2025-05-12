import { Box, Heading, Container, Stack, Link, Icon } from '@chakra-ui/react'
//import { EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <Box id="contato" py="6rem" bg="black">
      <Container maxW="container.lg">
        <Heading mb={6} color="white">Contato</Heading>

       

        <Stack direction="column" gap={3}>
          <Link href="mailto:aline_ibaldo@hotmail.com" color="blue.300" display="flex" alignItems="center">
            {/*<Icon as={EmailIcon} boxSize={4} mr={2} />*/}
            Email
          </Link>

          <Link
            href="https://github.com/alineibaldo"
            color="blue.300"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
          >
            <Icon as={FaGithub} boxSize={4} mr={2} />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/aline-ibaldo-gon%C3%A7alves-6a8918100/"
            color="blue.300"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
          >
            <Icon as={FaLinkedin} boxSize={4} mr={2} />
            LinkedIn
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}
