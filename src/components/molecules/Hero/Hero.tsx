import { Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

import { Section } from '~/components/atoms';

import { LinksDesktop, LinksMobile } from '..';

const Hero: React.FC = () => {
    const [isDesktop] = useMediaQuery('(min-width: 1280px)');

    return (
        <Box as="main" pt={['140px', 48]} pb={[24, '352px']}>
            <Section position="relative">
                <Box position="relative" zIndex="1">
                    <Box as="h4" textStyle="h4" ms={[0, '136px']} my="0" textAlign="left">
                        Kacper Jagieła
                    </Box>
                    <Box as="h1" textStyle="h1" ms={[0, '136px']} my="0" textAlign="left">
                        Full-Stack
                    </Box>
                    <Box as="h1" textStyle="h1" ms={[0, '136px']} my="0" textAlign="center">
                        Developer Portfolio
                    </Box>
                </Box>
                {isDesktop ? <LinksDesktop /> : <LinksMobile />}
            </Section>
        </Box>
    );
};

export default Hero;
