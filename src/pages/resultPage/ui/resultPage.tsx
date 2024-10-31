import { Heading, Stack } from '@chakra-ui/react';

export const ResultPage = () => {
  return (
    <Stack textAlign="center" bg="gray.100" h="100vh">
      <Heading fontSize={{ base: '2xl', xl: '7xl' }} pt="100px">
        Message generated on the server
      </Heading>
    </Stack>
  );
};
