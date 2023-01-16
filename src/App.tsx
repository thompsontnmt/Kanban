import React from 'react';
import { Container, Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
    <Heading
      fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
      fontWeight='bold'
      textAlign='center'
      bgGradient='linear(to-l, #7828CA, #FF0090)'
      bgClip='text'
    >
      TypeScript Drag and Drop Kanban
    </Heading>
    <Container maxWidth='container.lg' px={4} py={10}>
      
    </Container>
    </>
  );
}

export default App;
