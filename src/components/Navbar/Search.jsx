import React, { useState } from 'react';
import {
  Input, Stack, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { IoSearchSharp } from 'react-icons/io5';

const Search = (props) => {
  const { searchProduct } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    setSearch(value);
    searchProduct(value);
  };

  return (
    <>
      <Stack>
        <InputGroup borderBottom="1px solid #fff">
          <InputLeftElement
            pointerEvents="none"
          >
            <IoSearchSharp color="#fff" />
          </InputLeftElement>
          <Input value={search} minWidth="100%" maxW="100%" onChange={(event) => handleSearch(event.target.value)} color="#fff" border="none" placeholder="Busca productos..." _active={{ boxShadow: 'none' }} _focus={{ boxShadow: 'none' }} />
        </InputGroup>
      </Stack>
    </>
  );
};

export default Search;
