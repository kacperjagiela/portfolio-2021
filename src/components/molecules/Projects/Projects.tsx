import { Box, Stack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

import { Section } from '~/components/atoms';
import Project from '~/components/atoms/Project/Project';

const Projects: React.FC = () => {
    const [isDesktop] = useMediaQuery('(min-width: 1280px)');

    console.log(isDesktop);

    return (
        <Box bg="background.secondary" py={[16, '120px']} as="section" id="portfolio">
            <Section>
                <Stack direction={['column', 'row']} spacing={[12, null, null, 'auto', null, 16]}>
                    <Stack direction={['column']} spacing={[12, 0]}>
                        <Box as="h2" textStyle="h2" my="0px" textAlign="left" pb={[0, '166px']}>
                            Recent <br />
                            Projects
                        </Box>
                        <Box pb={[0, '82px']}>
                            <Project
                                name="Porvalo App"
                                imageSrc="/images/placeholder.png"
                                size={isDesktop ? 'small' : 'mobile'}
                                tags={['React', 'TypeScript', 'Node.js']}
                                link="#"
                            />
                        </Box>
                        <Project
                            name="Porvalo App"
                            imageSrc="/images/placeholder.png"
                            size={isDesktop ? 'large' : 'mobile'}
                            tags={['React', 'TypeScript', 'Node.js']}
                            link="#"
                        />
                    </Stack>
                    <Stack direction={['column']} pt={[0, 16]} spacing={[12, 0]}>
                        <Box pb={[0, '82px']}>
                            <Project
                                name="Porvalo App"
                                imageSrc="/images/placeholder.png"
                                size={isDesktop ? 'large' : 'mobile'}
                                tags={['React', 'TypeScript', 'Node.js']}
                                link="#"
                            />
                        </Box>
                        <Project
                            name="Porvalo App"
                            imageSrc="/images/placeholder.png"
                            size={isDesktop ? 'small' : 'mobile'}
                            tags={['React', 'TypeScript', 'Node.js']}
                            link="#"
                        />
                    </Stack>
                </Stack>
            </Section>
        </Box>
    );
};

export default Projects;
