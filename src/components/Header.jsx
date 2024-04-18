import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        w={'10'}
        height={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Video Hub</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button colorScheme="purple" variant={'ghost'}>
                  <Link to={'/'} onClick={onClose}>
                    Home
                  </Link>
                </Button>

                <Button colorScheme="purple" variant={'ghost'}>
                  <Link to={'/videoes'} onClick={onClose}>
                    Video
                  </Link>
                </Button>

                <Button colorScheme="purple" variant={'ghost'}>
                  <Link to={'/videos?catagory=free'} onClick={onClose}>
                    Free Video
                  </Link>
                </Button>

                <Button colorScheme="purple" variant={'ghost'}>
                  <Link to={'/upload'} onClick={onClose}>
                    Upload Video
                  </Link>
                </Button>
              </VStack>

              <HStack
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button colorScheme={'purple'}>
                  <Link to={'/login'} onClick={onClose}>
                    Log in
                  </Link>
                </Button>

                <Button colorScheme={'purple'} variant={'outline'}>
                  <Link to={'/signup'} onClick={onClose}>
                    Sign up
                  </Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
