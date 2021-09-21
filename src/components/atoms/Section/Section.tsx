import React from 'react';
import { Container } from '@chakra-ui/layout';

type Props = {
    children?: any | any[];
    as?: any;
    position?: any;
};

const Section: React.FC<Props> = ({ children, as, position }: Props) => {
    return (
        <Container
            maxW={['container.sm', 'container.md', 'container.lg', 'container.lg', 'container.xl', 'container.xxl']}
            px={[4, 0]}
            as={as || 'div'}
            position={position || 'unset'}
        >
            {children}
        </Container>
    );
};

export default Section;
