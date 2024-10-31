import { Box, Button, Grid, GridItem, Heading, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const SecondSection = () => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={{ base: '10px', xl: '40px' }}
      py={{ base: '10px', xl: '30px' }}
    >
      <Heading as="h1" textAlign="center" fontSize={{ base: 'xl', xl: '6xl' }}>
        Also very important title
      </Heading>
      <Grid
        as="article"
        templateColumns="repeat(3, 1fr)"
        gap={{ base: '10px', xl: '100px' }}
        p="30px"
      >
        <GridItem>
          <Heading as="h4" fontSize={{ base: 'md', xl: '2xl' }}>
            Title
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize={{ base: 'md', xl: '2xl' }}>
            Title
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize={{ base: 'md', xl: '2xl' }}>
            Title
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize={{ base: 'md', xl: '2xl' }}>
            Title
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize={{ base: 'md', xl: '2xl' }}>
            Title
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize={{ base: 'md', xl: '2xl' }}>
            Title
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum
          </p>
        </GridItem>
      </Grid>
      <Box display="flex" alignSelf="center">
        <Button bg="black" color="white" onClick={() => navigate('/form')}>
          Contact us
        </Button>
      </Box>
    </Stack>
  );
};
