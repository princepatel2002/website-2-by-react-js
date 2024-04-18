import React from 'react';
import { Link } from 'react-router-dom';

import {
  Avatar,
  Button,
  Container,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} height={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'16'}
          my={'16'}
        >
          <h1>VIDEO HUB</h1>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            type="emial"
            placeholder="Email"
            required
            focusBorderColor="purple.500"
            my={'5'}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            focusBorderColor="purple.500"
          />

          <Button
            alignSelf={'flex-end'}
            my={'5'}
            color={'white'}
            background={'purple.500'}
          >
            Sign in
          </Button>
          <Text textAlign={'right'}>
            Already Signed up? {'  '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
