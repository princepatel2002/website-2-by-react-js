import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxw={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          w={'full'}
          py={'2'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          services{' '}
          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image
              src={img5}
              filter={'hue-rotate(-130deg)'}
              h={['40', '350']}
            />
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
              fontSize={'10'}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
              impedit quisquam accusamus aliquid hic officia veniam culpa
              exercitationem ea atque consequatur illum repellendus fuga? Nemo
              tenetur laboriosam perferendis minima. Doloremque inventore ut
              optio cupiditate voluptatum, amet maxime voluptas molestiae
              explicabo id. Autem repudiandae, eaque aliquid fugiat tempora
              <span color="white">hellothsldhfsdkfsdfkksddkfksdfkfksdhksd</span>
              quibusdam perspiciatis molestias quidem neque labore dolore
              debitis culpa placeat sint amet asperiores.
            </Text>
          </Stack>
        </Heading>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={10000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600 '} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600 '} color={'white'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600 '} color={'white'} {...headingOptions}>
        Gaming on colsole
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600 '} color={'white'} {...headingOptions}>
        night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
