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
