import { Box, Flex } from '@chakra-ui/layout';

import { ExperienceAccordion, Section } from '~/components/atoms';

const WorkExperience: React.FC = () => (
    <Box as={'section'} py={[4, 40]} pb={[16, 40]}>
        <Section>
            <Flex direction={['column', 'row']}>
                <Box as="h2" textStyle="h2" flex="1" pb={[4, 0]} pr={[0, 16]}>
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
