import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';

import { Section } from '~/components/atoms';

const About: React.FC = () => (
    <Box py={[16, '120px']} id="about" overflow="hidden">
        <Section as="section" position="relative">
            <Flex flexDirection="row">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    _before={{
                        content: `""`,
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        border: '1px solid #EEE',
                        borderRadius: '100rem',
                        pointerEvents: 'none',
                        width: '40em',
                        height: '40em',
                    }}
                />
                <Text as="h2" textStyle="h2" my="0px" pb={[10]} position="relative" zIndex="1">
                    About me
                </Text>
                <Spacer />
                <Box
                    w={[10, 40]}
                    display={['none', 'flex']}
                    _before={{
                        content: `""`,
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        border: '1px solid #EEE',
                        borderRadius: '100rem',
                        pointerEvents: 'none',
                        width: '25em',
                        height: '25em',
                    }}
                />
            </Flex>
            <Text as="h4" textStyle="h4" my="0px" color="typography.secondary" position="relative" zIndex="1">
                I am a passionate full-stack developer focused on improving my skills every day. When developing apps, I
                keep my focus on future users and their needs. Always trying to find better and faster solutions to
                problems I am currently facing is the reason I love to code. Working in a team is as natural for me as
                breathing. In my free time, I like to challenge myself with Game development. As a hobby, I enjoy chess
                and playing VR games.
            </Text>
        </Section>
    </Box>
);

export default About;
