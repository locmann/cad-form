import { Container } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Container
      as="footer"
      fontSize={{ base: 'xl', xl: '2xl' }}
      textAlign="center"
      p={{ base: '10px', xl: '100px' }}
      fontWeight="bold"
    >
      Some Company 2024
    </Container>
  );
};
