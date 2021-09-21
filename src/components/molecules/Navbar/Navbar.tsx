import { Box, Flex, Spacer, Stack } from '@chakra-ui/layout';

import { IconBrand, Section } from '~/components/atoms';

const Navbar: React.FC = () => (
    <Section as="nav">
        <Flex my="6" alignItems="center">
            <a href="#">
                <IconBrand />
            </a>
            <Spacer />
            <Box>
                <Stack direction={['row']} spacing={[10, 10]}>
                    <Box as="h5" textStyle="h5" my={0}>
                        <a href="#portfolio">Portfolio</a>
                    </Box>
                    <Box as="h5" textStyle="h5">
                        <a href="#portfolio">About me</a>
                    </Box>
                    <Box as="h5" textStyle="h5">
                        <a href="#portfolio">Let’s get in touch</a>
                    </Box>
                </Stack>
            </Box>
        </Flex>
    </Section>
);

export default Navbar;
