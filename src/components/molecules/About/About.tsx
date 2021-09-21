import { Box, Text } from '@chakra-ui/layout';

import { Section } from '~/components/atoms';

const About: React.FC = () => (
    <Box py={['120px']}>
        <Section as="section">
            <Text as="h2" textStyle="h2" my="0px" pb={[10]}>
                About me
            </Text>
            <Text as="h4" textStyle="h4" my="0px" color="typography.secondary">
                Egestas eu tristique faucibus turpis vitae nibh. Dui ultrices sed odio sagittis dui sit purus maecenas.
                Pretium ipsum ac, egestas lacus, enim. Sed accumsan vitae lectus quis non vulputate felis odio nec.
                Auctor id justo neque pellentesque. Scelerisque lectus varius dui fringilla consequat.Proin eget sodales
                faucibus sit arcu. Est ut tristique integer ipsum dui. Non mi vitae mi arcu adipiscing. Donec pulvinar
                sed aliquet duis. Velit dictumst justo nunc nunc, purus. Mattis posuere egestas tincidunt vitae nisl
                enim, in enim eget. Ornare eget arcu lectus quis sit tincidunt libero. Id pharetra tortor at amet.
            </Text>
        </Section>
    </Box>
);

export default About;
