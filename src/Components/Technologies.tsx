import { Box, Heading, SimpleGrid, Container, Center } from '@chakra-ui/react'

const techs = [
  { name: 'Javascript', image: '/icons/javascript.png' },
  { name: 'Node.js', image: '/icons/node.png' },
  { name: 'React', image: '/icons/react.png' },
  { name: 'Nextjs', image: '/icons/nextjs.png' },
  { name: 'Git', image: '/icons/git.png' },
  { name: 'GitHub', image: '/icons/github.png' },
  { name: 'Postman', image: '/icons/postman.png' },
  { name: 'Python', image: '/icons/python.png' },
  { name: 'SQL', image: '/icons/sql.png' },
  { name: 'Mongodb', image: '/icons/mongodb.png' },
  { name: 'Agile', image: '/icons/agile.png'},
  { name: 'Typescript', image: '/icons/typescript.png' },
  
]

export default function Technologies() {
  return (
    <Box id="tecnologias" py="6rem" bg="black">
      <Container maxW="container.lg">
        <Heading mb={6} color="white">
          Tecnologias
        </Heading>

        <SimpleGrid columns={[3, 4, 6]} gap={0}>
          {techs.map((tech) => (
            <Center
              key={tech.name}
              bg="black"
              borderRadius="md"
              p={0}
              boxSize="120px"
              
            >
              <img
                src={tech.image}
                alt={tech.name}
                style={{ width: '150px', height: '150px', objectFit: 'contain' }}
              />
            </Center>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}







