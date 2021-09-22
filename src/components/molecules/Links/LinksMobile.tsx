import { Box, Link, Stack } from '@chakra-ui/layout';

import { IconGithub, IconGmail, IconLinkedin } from '~/components/atoms';

const LinksMobile: React.FC = () => (
    <Stack direction="row" flex="1" justifyContent="center" spacing="8" pt="12">
        <Link
            href="https://github.com/kacperjagiela"
            w="fit-content"
            position="relative"
            zIndex="1"
            _focus={{ border: 'none' }}
        >
            <Box>
                <IconGithub />
            </Box>
        </Link>
        <Link href="https://www.linkedin.com/in/kacper-jagie%C5%82a/" w="fit-content" _focus={{ border: 'none' }}>
            <Box>
                <IconLinkedin />
            </Box>
        </Link>
        <Link
            href="mailto:jagielakacper80@gmail.com"
            w="fit-content"
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
                <IconGmail />
            </Box>
        </Link>
    </Stack>
);

export default LinksMobile;
