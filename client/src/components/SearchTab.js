import React from 'react';
//import { Box, InputGroup, InputLeftElement, Icon, Input } from '@chakra-ui/core';

const SearchTab =  ({searchTerm, onChange}) => {
    return(
        <div className='tab'>
            <input type='text' placeholder='Search for your next country of travel...' value={searchTerm} onChange={onChange} />
            {/* <InputGroup className='search'>
                <InputLeftElement children={<Icon name="search" color="gray" />} />
                <Input type='text' placeholder='Search for your next country of travel...' value={searchTerm} onChange={onChange} />
            </InputGroup> */}
        </div>
    )
};

export default SearchTab;