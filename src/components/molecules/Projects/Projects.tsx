import { Box } from '@chakra-ui/layout';

import { Section } from '~/components/atoms';

const Projects: React.FC = () => (
    <Box bg="background.secondary" py={['120px']}>
        <Section>
            <Box as="h2" textStyle="h2">
                Recent <br />
                Projects
            </Box>
        </Section>
    </Box>
);

export default Projects;
