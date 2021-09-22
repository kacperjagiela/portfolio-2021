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
                Egestas eu tristique faucibus turpis vitae nibh. Dui ultrices sed odio sagittis dui sit purus maecenas.
                Pretium ipsum ac, egestas lacus, enim. Sed accumsan vitae lectus quis non vulputate felis odio nec.
                Auctor id justo neque pellentesque. Scelerisque lectus varius dui fringilla consequat.Proin eget sodales
                faucibus sit arcu. Est ut tristique integer ipsum dui. Non mi vitae mi arcu adipiscing. Donec pulvinar
                sed aliquet duis. Velit dictumst justo nunc nunc, purus. Mattis posuere egestas tincidunt vitae nisl
                enim, in enim eget. Ornare eget arcu lectus quis sit tincidunt libero. Id pharetra tortor at amet.
            </Text>
        </Section>
    </Box>
);

export default About;
