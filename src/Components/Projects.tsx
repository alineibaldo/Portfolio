import { Box, Heading, Container, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Calculadora',
    description: 'Calculadora utilizando HTML, CSS e JavaScript.',
    link: 'https://github.com/alineibaldo/calculadora-sprint1',
  },
  {
    title: 'Conversor de moedas',
    description: 'Projeto de um sistema que realiza a conversão em tempo real de valores monetários utilizando APIs que contém as bandeiras e o nome das moedas, assim como os valores das mesmas.',
    link: 'https://github.com/alineibaldo/Conversor-de-Moedas',
  },
  {
    title: 'API de Filmes',
    description: 'Utilizando Express.js, Prisma e SQLite, foi desenvolvida uma API para filmes, onde o usuário poderá criar, editar e deletar filmes, além de realizar reviews para um filme específico.',
    link: 'https://github.com/alineibaldo/API-de-Filmes',
  },
  {
    title: 'Projeto backend',
    description: 'Um sistema para gerenciar o acesso e as permissões de pessoas dentro de uma empresa com implementação de gerenciamento de usuários,autenticação baseada em JWT e permissões por nível de acesso',
    link: 'https://github.com/alineibaldo/Projeto-backend',
  },
  {
    title: 'Portfolio',
    description: 'Portfólio pessoal moderno, estiloso e responsivo usando ReactJS, Vite e TypeScript',
    link: 'https://github.com/alineibaldo/Portfolio',
  },
  
]

export default function Projects() {
  return (
    <Box id="projetos" py="6rem" bg="black">
      <Container maxW="container.lg">
        <Heading mb={6} color="white">Projetos</Heading>
        <SimpleGrid columns={[1, 2]} gap={6}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

