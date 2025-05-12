import { Box, Flex, Link, HStack } from '@chakra-ui/react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  return (
    <Box as="header" bg="black" px={6} py={4} position="fixed" top={0} w="100%" zIndex={999} boxShadow="md">
      <Flex justify="space-between" align="center" wrap="wrap">
        <Box fontWeight="bold" color="gray.500">Aline Ibaldo Gonçalves / Portfólio</Box>
        <HStack>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              color="gray.500"
              _hover={{ color: 'white' }}
              ml={index === 0 ? 0 : 4}
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

