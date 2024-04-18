import { Button, Container, Input, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import React from 'react';

const LogIn = () => {
  return (
    <Container maxW={'container.xl'} height={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={'96'}
          m={'16'}
          my={'16'}
        >
          {' '}
          <h1>Welcome Back</h1>
          <Input
            type="emial"
            placeholder="Email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            focusBorderColor="purple.500"
            my={'5'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button
            color={'white'}
            background={'purple.500'}
            w={['full', '96']}
            border={'1px solid purple.500'}
          >
            Log in
          </Button>
          <Text textAlign={'right'}>
            New User? {'  '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default LogIn;
