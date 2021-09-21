import { ReactElement } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import '../../styles/globals.css';

const theme = extendTheme({
    fonts: {
        body: 'Kumbh Sans, sans-serif',
        heading: 'Kumbh Sans, sans-serif',
        mono: 'Kumbh Sans, sans-serif',
    },
    colors: {
        background: {
            main: '#FFFFFF',
            secondary: '#F7F8FB',
        },
        typography: {
            main: '#111111',
            secondary: '#414141',
            tertiary: '#6D6D6E',
            stroke: '#DCE4EB',
        },
    },
    textStyles: {
        h1: {
            fontSize: ['36px', '120px'],
            fontWeight: 'normal',
            lineHeight: ['40px', '128px'],
            letterSpacing: '-0.05rem',
        },
        h2: {
            fontSize: ['32px', '64px'],
            fontWeight: 'normal',
            lineHeight: ['40px', '72px'],
            letterSpacing: '-0.05rem',
        },
        h3: {
            fontSize: ['24px', '36px'],
            fontWeight: 'normal',
            lineHeight: ['32px', '48px'],
            letterSpacing: '-0.05rem',
        },
        h4: {
            fontSize: ['16px', '20px'],
            fontWeight: 'normal',
            lineHeight: ['32px', '32px'],
        },
        h5: {
            fontSize: ['14px', '16px'],
            fontWeight: 'normal',
            lineHeight: ['20px', '20px'],
        },
        body: {
            fontSize: ['14px', '16px'],
            fontWeight: 'normal',
            lineHeight: ['24px', '32px'],
        },
    },
    breakpoints: {
        xxl: '1920px',
    },
    sizes: {
        container: {
            xxl: '1600px',
        },
    },
});

const MyApp = ({ Component, pageProps }: AppProps): ReactElement<any, any> => {
    return (
        <ChakraProvider resetCSS={false} theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
