import { Box, Heading, Text, Link, Stack, Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Box
      as="article"
      bg="gray.800"
      borderRadius="md"
      boxShadow="md"
      p={6}
      transition="all 0.3s"
      _hover={{
        bg: 'gray.700',
        transform: 'scale(1.02)',
      }}
    >
      <Stack gap={4}>
        <Heading size="md" color="white">
          {title}
        </Heading>

        <Text color="gray.300">
          {description}
        </Text>

        <Link
          href={link}
          color="blue.300"
          target="_blank"
          rel="noopener noreferrer"
          display="inline-flex"
          alignItems="center"
          width="fit-content"
        >
          <Icon as={FaGithub} boxSize={4} mr={2} />
          Ver Projeto
        </Link>
      </Stack>
    </Box>
  )
}


