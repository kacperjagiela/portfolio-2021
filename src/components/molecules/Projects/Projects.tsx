import { Box, Stack } from '@chakra-ui/layout';

import { Section } from '~/components/atoms';
import Project from '~/components/atoms/Project/Project';

const Projects: React.FC = () => (
    <Box bg="background.secondary" py={['120px']} as="section">
        <Section>
            <Box as="h2" textStyle="h2" my="0px" textAlign="left">
                Recent <br />
                Projects
            </Box>
            <Stack direction="row" spacing={[16]}>
                <Project
                    name="Porvalo App"
                    imageSrc="/images/placeholder.png"
                    size="small"
                    tags={['React', 'TypeScript', 'Node.js']}
                    link="#"
                />
                <Project
                    name="Porvalo App"
                    imageSrc="/images/placeholder.png"
                    size="large"
                    tags={['React', 'TypeScript', 'Node.js']}
                    link="#"
                />
            </Stack>
        </Section>
    </Box>
);

export default Projects;
