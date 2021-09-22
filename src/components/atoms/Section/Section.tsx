import React, { ReactElement } from 'react';
import { Container } from '@chakra-ui/layout';

type Props = {
    children?: Element | Element[] | ReactElement | ReactElement[];
    as?: any;
    position?: 'relative';
};

const Section: React.FC<Props> = ({ children, as, position }: Props) => {
    return (
        <Container
            maxW={['container.sm', 'container.md', 'container.lg', 'container.lg', 'container.xl', 'container.xxl']}
            px={[4, null, null, null, 4, '0px']}
            as={as || 'div'}
            position={position || 'unset'}
        >
            {children}
        </Container>
    );
};

export default Section;
