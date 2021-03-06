import type { NextPage } from 'next';
import Head from 'next/head';

import { Homepage } from '~/components/organisms';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kacper Jagieła Portfolio</title>
                <meta name="description" content="Portfolio by Kacper Jagieła" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap" rel="stylesheet"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#e5e5e5"></meta>
            </Head>
            <Homepage />
        </>
    );
};

export default Home;
