import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormType } from '@/entities/formCTA/model/types.ts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormCTA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResponseMessage(result.message);

      if (response.ok) {
        navigate('/result');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <FormControl
      w="auto"
      p="16px"
      bg="white"
      border="1px solid lightgray"
      borderRadius="10px"
      onSubmit={handleSubmit(onSubmit)}
      as="form"
      isInvalid={!!(errors.text || errors.email || errors.name)}
      display="flex"
      flexDirection="column"
      gap="10px"
      width="100%"
      maxW="500px"
      mx="auto"
    >
      <FormLabel>Name</FormLabel>
      <Input {...register('name', { required: true })} />
      {errors.name && (
        <FormErrorMessage>This field is required</FormErrorMessage>
      )}
      <FormLabel>Email</FormLabel>
      <Input {...register('email', { required: true })} />
      {errors.email && (
        <FormErrorMessage>This field is required</FormErrorMessage>
      )}
      <Text>Message</Text>
      <Textarea {...register('text', { required: true })} />
      {errors.text && (
        <FormErrorMessage>This field is required</FormErrorMessage>
      )}
      <Button bg="black" color="white" type="submit">
        Submit
      </Button>
    </FormControl>
  );
};
