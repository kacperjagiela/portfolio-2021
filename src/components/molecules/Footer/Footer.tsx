import { Box, Divider, Flex, Link, Spacer, Text } from '@chakra-ui/layout';

import { Section } from '~/components/atoms';

const Footer: React.FC = () => (
    <Box bg="background.secondary" pt={['120px']}>
        <Section>
            <Flex flex="1" alignItems="center">
                <Box as="h2" textStyle="h2" my="0px">
                    Let’s work <br />
                    together 👋
                </Box>
                <Spacer />
                <Box as="h3" textStyle="h3" my="0px">
                    jagielakacper80@gmail.com <br />
                    <Text w="fit-content" as="span" color="typography.tertiary">
                        +48
                    </Text>{' '}
                    783 890 500
                </Box>
            </Flex>
            <Divider />
            <Text as="h5" textStyle="h5" pt={[10]} pb={[4]} textAlign="center" my="0px">
                Developed by me 😁{' '}
            </Text>
            <Text as="h5" textStyle="h5" pb={[10]} textAlign="center" my="0px">
                Designed by{' '}
                <Link textDecoration="underline" href="https://dribbble.com/uiuxmaciej" _focus={{ border: 'none' }}>
                    Maciej Gutkowski
                </Link>
            </Text>
        </Section>
    </Box>
);

export default Footer;
