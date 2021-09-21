import { Box, Stack } from '@chakra-ui/layout';

import { Section } from '~/components/atoms';
import Project from '~/components/atoms/Project/Project';

const Projects: React.FC = () => (
    <Box bg="background.secondary" py={['120px']} as="section" id="portfolio">
        <Section>
            <Stack direction={['row']} spacing={[16]}>
                <Stack direction={['column']} spacing="0px">
                    <Box as="h2" textStyle="h2" my="0px" textAlign="left" pb={['166px']}>
                        Recent <br />
                        Projects
                    </Box>
                    <Box pb={['82px']}>
                        <Project
                            name="Porvalo App"
                            imageSrc="/images/placeholder.png"
                            size="small"
                            tags={['React', 'TypeScript', 'Node.js']}
                            link="#"
                        />
                    </Box>
                    <Project
                        name="Porvalo App"
                        imageSrc="/images/placeholder.png"
                        size="large"
                        tags={['React', 'TypeScript', 'Node.js']}
                        link="#"
                    />
                </Stack>
                <Stack direction={['column']} pt={[16]} spacing="0px">
                    <Box pb={['82px']}>
                        <Project
                            name="Porvalo App"
                            imageSrc="/images/placeholder.png"
                            size="large"
                            tags={['React', 'TypeScript', 'Node.js']}
                            link="#"
                        />
                    </Box>
                    <Project
                        name="Porvalo App"
                        imageSrc="/images/placeholder.png"
                        size="small"
                        tags={['React', 'TypeScript', 'Node.js']}
                        link="#"
                    />
                </Stack>
            </Stack>
        </Section>
    </Box>
);

export default Projects;
