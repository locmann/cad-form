import { FormCTA } from '@/entities/formCTA';
import { Heading, VStack } from '@chakra-ui/react';

export const FormPage = () => {
  return (
    <VStack bg="gray.100" p={{ base: '10px', xl: '100px' }} spacing="20px">
      <Heading as="h1" fontSize={{ base: 'xl', lg: '6xl' }}>
        Only CTA on the page
      </Heading>
      <FormCTA />
    </VStack>
  );
};
