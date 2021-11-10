import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#fff',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transition: 'transform 0.2s, all 0.2s ease-in-out',
          transform: 'scale(1.02)',
        },
      },
      variants: {
        solid: {
          backgroundColor: '#E7ECF2',
          color: '#000',
          _hover: { backgroundColor: '#D6DBE3' },
          _active: { backgroundColor: '#A9AEB4' },
        },
        whatsapp: {
          backgroundColor: '#22627C',
          color: '#000',
          _hover: { backgroundColor: '#1A4C61' },
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
