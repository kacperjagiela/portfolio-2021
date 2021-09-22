import { Box, Stack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

import { Project, Section } from '~/components/atoms';

const Projects: React.FC = () => {
    const [isDesktop] = useMediaQuery('(min-width: 1280px)');

    return (
        <Box bg="background.secondary" py={[16, '120px']} as="section" id="portfolio">
            <Section>
                <Stack direction={['column', 'row']} spacing={[12, 6, null, 'auto', null, 16]}>
                    <Stack direction={['column']} spacing={[12, 0]}>
                        <Box as="h2" textStyle="h2" my="0px" textAlign="left" pb={[0, '166px']}>
                            Recent <br />
                            Projects
                        </Box>
                        <Box pb={[0, '82px']}>
                            <Project
                                name="QA App"
                                imageSrc="/images/qa-app.png"
                                size={isDesktop ? 'small' : 'mobile'}
                                tags={['JavaScript', 'Node.js', 'MongoDB']}
                                link="https://kacperjagiela.github.io/qa-app-mongodb/#/"
                            />
                        </Box>
                        <Project
                            name="This portfolio 😁"
                            imageSrc="/images.png"
                            size={isDesktop ? 'large' : 'mobile'}
                            tags={['React', 'TypeScript', 'Chakra UI']}
                            link="https://github.com/kacperjagiela"
                        />
                    </Stack>
                    <Stack direction={['column']} pt={[0, 16]} spacing={[12, 0]}>
                        <Box pb={[0, '82px']}>
                            <Project
                                name="Neovilla.pl"
                                imageSrc="/images/neovilla.png"
                                size={isDesktop ? 'large' : 'mobile'}
                                tags={['Bootstrap', 'HTML5', 'JavaScript']}
                                link="https://neovilla.pl/#strona-glowna"
                            />
                        </Box>
                        <Project
                            name="Weather App"
                            imageSrc="/images/weather-app.png"
                            size={isDesktop ? 'small' : 'mobile'}
                            tags={['React', 'JavaScript']}
                            link="https://kacperjagiela.github.io/weather-app/#/"
                        />
                    </Stack>
                </Stack>
            </Section>
        </Box>
    );
};

export default Projects;
