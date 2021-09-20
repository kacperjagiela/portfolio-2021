import React from 'react';
import { Box } from '@chakra-ui/layout';

import { Footer, Hero, Navbar, Projects, WorkExperience } from '~/components/molecules';

const Homepage: React.FC = () => {
    return (
        <Box color="typography.main">
            <Navbar />
            <Hero />
            <WorkExperience />
            <Projects />
            <Footer />
        </Box>
    );
};

export default Homepage;
