import { Box, Flex, Link, Spacer, Stack, Text } from '@chakra-ui/layout';
import Image from 'next/image';

import { IconArrowRight } from '..';

type Props = {
    imageSrc: string;
    size: 'mobile' | 'small' | 'large';
    name: string;
    tags: string[];
    link: string;
};

const Project: React.FC<Props> = ({ link, imageSrc, size, name, tags }: Props) => {
    let width = 768;
    let height;

    if (size === 'large') {
        height = 724;
    } else if (size === 'small') {
        height = 478;
    } else {
        width = 320;
        height = 220;
    }

    return (
        <Box w="fit-content">
            <Link href={link} _hover={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                <Image src={imageSrc} alt={name} loading="lazy" width={width} height={height} />
                <Flex alignItems="center" pt={[12]} pb={[2]}>
                    <Text as="h3" textStyle="h3" my="0px">
                        {name}
                    </Text>
                    <Spacer />
                    <IconArrowRight />
                </Flex>
                <Stack direction="row" spacing="4">
                    {tags.map((tag) => (
                        <Box
                            key={name + '-' + tag}
                            px={[6]}
                            py={[3]}
                            my="0px"
                            as="h5"
                            textStyle="h5"
                            color="typography.tertiary"
                            border="1px"
                            borderRadius="99px"
                            borderColor="typography.stroke"
                        >
                            {tag}
                        </Box>
                    ))}
                </Stack>
            </Link>
        </Box>
    );
};

export default Project;