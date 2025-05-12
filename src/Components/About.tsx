import { Box, Heading, Text, Container } from '@chakra-ui/react'

export default function About() {
  return (
    <Box id="sobre" py={24} bg="black">
      <Container maxW="container.lg">
      <Heading mb={6} color="white">Sobre Mim</Heading>
        <Text fontSize="lg" color="gray.100">
         
          Olá! Me chamo Aline, atualmente sou estudante de Análise e Desenvolvimento de Sistemas na PUCRS e estou constantemente em busca de novos conhecimentos e desafios que me ajudem a evoluir na área de tecnologia. Tenho interesse especial nas áreas de desenvolvimento Back-end e Quality Assurance (QA)
          
        </Text>
      </Container>
    </Box>
  )
}


