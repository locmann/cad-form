import { Button, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      px="10px"
      py="20px"
      position="sticky"
      top="0"
      bg="white"
      zIndex="999"
    >
      <Heading>Some Company</Heading>
      <Button bg="black" color="white" onClick={() => navigate('/form')}>
        Contact us
      </Button>
    </Flex>
  );
};
