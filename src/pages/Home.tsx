import { Box, Container, Heading, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box textAlign="center">
        <Heading mb={4}>Welcome to Your App</Heading>
        <Text fontSize="lg">This is a Vite + React + Supabase + Vercel template</Text>
      </Box>
    </Container>
  )
}

export default Home 