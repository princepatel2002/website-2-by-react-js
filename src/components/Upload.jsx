import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'contaier.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />

        <form>
          <HStack></HStack>

          <Input
            required
            type={'file'}
            css={{
              '&::file-selector-button': {
                border: 'none',
                width: 'calc(100% + 36px)',
                height: '100vh',
                marginLeft: '-18px',
                color: 'purple',
                backgroundColor: 'white',
                cursor: 'pointer',
              },
            }}
          />
          <Button colorScheme="purple">Upload</Button>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
