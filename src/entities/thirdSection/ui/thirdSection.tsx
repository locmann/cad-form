import { Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const ThirdSection = () => {
  const navigate = useNavigate();
  return (
    <VStack bg="gray.100" spacing="30px" p="30px">
      <Heading as="h1" fontSize={{ base: 'xl', xl: '6xl' }}>
        Less important title
      </Heading>
      <Button bg="black" color="white" onClick={() => navigate('/form')}>
        Contact us
      </Button>
    </VStack>
  );
};
