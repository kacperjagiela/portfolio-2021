import React from 'react';
import { Box } from '@chakra-ui/layout';

import { About, Footer, Hero, Navbar, Projects, WorkExperience } from '~/components/molecules';

const Homepage: React.FC = () => {
    return (
        <Box color="typography.main" position="relative">
            <Navbar />
            <Hero />
            <WorkExperience />
            <Projects />
            <About />
            <Footer />
        </Box>
    );
};

export default Homepage;
