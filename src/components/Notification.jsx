import React from 'react';
import {
  createStandaloneToast, Box, Text,
} from '@chakra-ui/react';
import { MdProductionQuantityLimits } from 'react-icons/md';
import theme from '../theme';

const Notification = (title, description, id) => {
  const toast = createStandaloneToast({ theme });

  toast({
    duration: 3000,
    zIndex: 1000,
    position: 'bottom',
    id,
    render: () => (
      <Box borderRadius="9px" color="white" p={4} bg="red.400">
        <Box display="flex">
          <Box fontSize="1.5rem" alignSelf="center" mr={3}>
            <MdProductionQuantityLimits />
          </Box>
          <Box>
            <Text fontWeight="500">{title}</Text>
            <Text textAlign="center">{description}</Text>
          </Box>
        </Box>
      </Box>
    ),
  });

  return (
    <>
    </>
  );
};

export default Notification;
