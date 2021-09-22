import { useEffect, useState } from 'react';
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

const Project: React.FC<Props> = ({ link, imageSrc, size = 'small', name, tags }: Props) => {
    const [width, setWidth] = useState('768px');
    const [height, setHeight] = useState('724px');

    useEffect(() => {
        if (size === 'large') {
            setWidth('768px');
            setHeight('724px');
        } else if (size === 'small') {
            setWidth('768px');
            setHeight('478px');
        } else if (size === 'mobile') {
            setWidth('full');
            setHeight('220px');
        }
    }, [size]);

    return (
        <Box w={['full', 'fit-content']}>
            <Link href={link} _hover={{ textDecoration: 'none' }} _focus={{ border: 'none' }}>
                <Box
                    w={['full', null, null, width]}
                    h={height}
                    maxW={['500px', null, null, null, '590px', 'container.md']}
                    position="relative"
                >
                    <Image
                        src={imageSrc}
                        onLoadingComplete={() => console.log(name)}
                        alt={name}
                        loading="eager"
                        layout="fill"
                    />
                </Box>
                <Flex alignItems="center" pt={['20px', 12]} pb={[2]}>
                    <Text as="h3" textStyle="h3" my="0px">
                        {name}
                    </Text>
                    <Spacer />
                    <IconArrowRight />
                </Flex>
                <Stack direction="row" spacing={[2, 4]}>
                    {tags.map((tag) => (
                        <Box
                            key={name + '-' + tag}
                            px={[3, 6]}
                            py={[2, 3]}
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
