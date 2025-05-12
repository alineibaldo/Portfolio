import { Box, Text, } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box as="footer" py={6} mt={10} borderTop="1px" borderColor="gray.700" textAlign="center">
  
      <Text color="gray.500" mt={2} fontSize="sm">
        &copy; {new Date().getFullYear()} Aline Ibaldo Gonçalves
      </Text>
    </Box>
  )
}

