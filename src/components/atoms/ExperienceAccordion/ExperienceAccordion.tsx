import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';

const ExperienceAccordion: React.FC = () => (
    <Accordion defaultIndex={[0]} allowMultiple w="100%" maxW="3xl">
        <AccordionItem borderBottom="1px" borderBottomColor="typography.stroke" pb={[10]}>
            <Heading my="0px">
                <AccordionButton
                    bg="transparent"
                    border="0px"
                    p="0px"
                    _hover={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                    _expanded={{ backgroundColor: 'transparent' }}
                    _focus={{ backgroundColor: 'transparent' }}
                >
                    <Flex flex="1" flexDirection={['column']}>
                        <Flex alignItems="center" mb={4}>
                            <Box textAlign="left" textStyle="h3">
                                ShareSpace
                            </Box>
                            <Spacer />
                            <AccordionIcon w={8} h={8} />
                        </Flex>
                        <Box as="h5" my="0" textAlign="left" color="typography.tertiary" textStyle="h5">
                            October 2020 - Now
                        </Box>
                    </Flex>
                </AccordionButton>
            </Heading>
            <AccordionPanel pt={[8]} pb="0px" px="0px" textStyle="body" color="typography.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderBottom="1px" borderBottomColor="typography.stroke" py={[10]}>
            <Heading my="0px">
                <AccordionButton
                    bg="transparent"
                    border="0px"
                    p="0px"
                    _hover={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                    _expanded={{ backgroundColor: 'transparent' }}
                    _focus={{ backgroundColor: 'transparent' }}
                >
                    <Flex flex="1" flexDirection={['column']}>
                        <Flex alignItems="center" mb={4}>
                            <Box textAlign="left" textStyle="h3">
                                Nokia
                            </Box>
                            <Spacer />
                            <AccordionIcon w={8} h={8} />
                        </Flex>
                        <Box as="h5" my="0" textAlign="left" color="typography.tertiary" textStyle="h5">
                            March 2020 - September 2020
                        </Box>
                    </Flex>
                </AccordionButton>
            </Heading>
            <AccordionPanel pt={[8]} pb="0px" px="0px" textStyle="body" color="typography.secondary">
                Developing web application based on existing code base. Application is used to collect funds for
                charitable foundation. Frontend is written in React, backend is created with Node.js with framework
                Express.js. In this application I was working on every aspect, from responsive design to integration
                with payment providers using handwrote REST API. DevOps consisted of creating docker configs, manage
                external server, manage Gitlab CI/CD.
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
);

export default ExperienceAccordion;
