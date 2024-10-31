import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/routes';
import { ChakraProvider } from '@chakra-ui/react';

export const Providers: FC = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};
