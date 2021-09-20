import { Box } from '@chakra-ui/layout';

import { Section } from '~/components/atoms';

const Hero: React.FC = () => (
    <Box as="main" pt={[48]} pb={['352px']}>
        <Section>
            <Box as="h4" textStyle="h4" ms="136px" my="0">
                Kacper Jagieła
            </Box>
            <Box as="h1" textStyle="h1" ms="136px" my="0">
                Full-Stack
            </Box>
            <Box as="h1" textStyle="h1" ms="272px" my="0">
                Developer Portfolio
            </Box>
        </Section>
    </Box>
);

export default Hero;
