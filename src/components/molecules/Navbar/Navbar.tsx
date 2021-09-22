import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Divider, Flex, Spacer, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Portal } from '@chakra-ui/portal';
import { Slide } from '@chakra-ui/transition';

import { IconBrand, IconHamburger, Section } from '~/components/atoms';
import IconX from '~/components/atoms/IconX/IconX';

const Navbar: React.FC = () => {
    const [isDesktop] = useMediaQuery('(min-width: 1280px)');
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Section as="nav">
            <Flex my="6" alignItems="center">
                <a href="#">
                    <IconBrand />
                </a>
                <Spacer />
                {isDesktop ? (
                    <Box>
                        <Stack direction={['row']} spacing={[10, 10]}>
                            <Box as="h5" textStyle="h5" my={0}>
                                <a href="#portfolio">Portfolio</a>
                            </Box>
                            <Box as="h5" textStyle="h5">
                                <a href="#about">About me</a>
                            </Box>
                            <Box as="h5" textStyle="h5">
                                <a href="#footer">Let’s get in touch</a>
                            </Box>
                        </Stack>
                    </Box>
                ) : (
                    <Flex alignItems="center" onClick={onToggle}>
                        <IconHamburger />
                    </Flex>
                )}
                {!isDesktop && (
                    <Portal>
                        <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
                            <Box position="absolute" right="4" top="6" onClick={onToggle}>
                                <IconX />
                            </Box>
                            <Flex
                                w="full"
                                h="100vh"
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                textAlign="center"
                                bg="typography.main"
                                color="background.secondary"
                                px="4"
                            >
                                <Stack spacing="12">
                                    <Text as="h3" textStyle="h3" my="0">
                                        Portfolio
                                    </Text>
                                    <Text as="h3" textStyle="h3" my="0">
                                        About me
                                    </Text>
                                </Stack>
                                <Divider borderColor="typography.secondary" mt="24" mb="16" />
                                <Stack spacing="8" direction="column" alignItems="center" justifyContent="center">
                                    <Text as="h2" textStyle="h2" my="0">
                                        Let’s work <br />
                                        together 👋
                                    </Text>
                                    <Text as="h3" textStyle="h3" my="0px">
                                        jagielakacper80@gmail.com <br />
                                        <Text textStyle="h3" my="0px" mt="4">
                                            <Text w="fit-content" as="span" color="typography.tertiary">
                                                +48
                                            </Text>{' '}
                                            783 890 500
                                        </Text>
                                    </Text>
                                </Stack>
                            </Flex>
                        </Slide>
                    </Portal>
                )}
            </Flex>
        </Section>
    );
};

export default Navbar;
