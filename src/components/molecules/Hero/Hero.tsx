import { Box, Link } from '@chakra-ui/layout';

import { IconGithub, IconGmail, IconLinkedin, Section } from '~/components/atoms';

const Hero: React.FC = () => (
    <Box as="main" pt={[48]} pb={['352px']}>
        <Section position="relative">
            <Box position="relative" zIndex="1">
                <Box as="h4" textStyle="h4" ms="136px" my="0" textAlign="left" w="fit-content">
                    Kacper Jagieła
                </Box>
                <Box as="h1" textStyle="h1" ms="136px" my="0" textAlign="left" w="fit-content">
                    Full-Stack
                </Box>
                <Box as="h1" textStyle="h1" ms="272px" my="0" textAlign="left" w="fit-content">
                    Developer Portfolio
                </Box>
            </Box>
            <Link
                href="https://github.com/kacperjagiela"
                w="fit-content"
                position="absolute"
                left="calc(50% + 20rem)"
                top="-5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _focus={{ border: 'none' }}
                _before={{
                    content: `""`,
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    border: '1px solid #EEE',
                    borderRadius: '100rem',
                    pointerEvents: 'none',
                    width: '80em',
                    height: '80em',
                }}
            >
                <Box w={[20]} h={[20]}>
                    <IconGithub />
                </Box>
            </Link>
            <Link
                href="https://www.linkedin.com/in/kacper-jagie%C5%82a/"
                w="fit-content"
                position="absolute"
                left="-0.5rem"
                bottom="-120px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _focus={{ border: 'none' }}
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
            >
                <Box>
                    <IconLinkedin />
                </Box>
            </Link>
            <Link
                href="mailto:jagielakacper80@gmail.com"
                w="fit-content"
                position="absolute"
                left="calc(100% - 8rem)"
                top="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _focus={{ border: 'none' }}
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
            >
                <Box>
                    <IconGmail />
                </Box>
            </Link>
        </Section>
    </Box>
);

export default Hero;
