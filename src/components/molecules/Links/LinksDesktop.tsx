import { Box, Link } from '@chakra-ui/layout';

import { IconGithub, IconGmail, IconLinkedin } from '~/components/atoms';

const LinksDesktop: React.FC = () => (
    <>
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
            <Box>
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
    </>
);

export default LinksDesktop;
