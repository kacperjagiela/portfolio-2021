import { Box, Flex } from '@chakra-ui/layout';

import { ExperienceAccordion, Section } from '~/components/atoms';

const WorkExperience: React.FC = () => (
    <Box as={'section'} py={[40]}>
        <Section>
            <Flex>
                <Box as="h2" textStyle="h2" flex="1">
                    Work
                    <br />
                    Experience
                </Box>
                <ExperienceAccordion />
            </Flex>
        </Section>
    </Box>
);

export default WorkExperience;
