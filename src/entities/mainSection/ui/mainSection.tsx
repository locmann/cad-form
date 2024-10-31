import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';

export const MainSection = () => {
  return (
    <Grid
      as="article"
      bg="gray.100"
      templateColumns={{
        base: 'repeat(2, 1fr)',
        lg: 'repeat(9, 1fr)',
        xl: 'repeat(12, 1fr)',
      }}
      p={{ base: '4px', lg: '32px' }}
    >
      <GridItem colStart={1} colEnd={{ base: 2, xl: 3 }}>
        <Heading as="h1" pb="10px">
          Most important title on the page
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </Text>
      </GridItem>
      <GridItem
        colStart={{ base: 2, lg: 8, xl: 10 }}
        colEnd={{ base: 3, lg: 10, xl: 13 }}
      >
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=6hzjudxGwqppq-r4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </GridItem>
    </Grid>
  );
};
