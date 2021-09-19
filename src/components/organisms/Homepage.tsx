import React from 'react';
import { Box } from '@chakra-ui/layout';

import IconBrand from '../atoms/IconBrand';

const Homepage: React.FC = () => {
    return (
        <Box>
            <IconBrand />
            <Box textStyle="h1">Utevo lux</Box>
        </Box>
    );
};

export default Homepage;
