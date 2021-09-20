import React from 'react';
import { Container } from '@chakra-ui/layout';

type Props = {
    children?: any | any[];
    as?: any;
};

const Section: React.FC<Props> = ({ children, as }: Props) => {
    return (
        <Container
            maxW={[
                'container.sm',
                null,
                'container.md',
                'container.lg',
                'container.lg',
                'container.xl',
                'container.xxl',
            ]}
            px="0"
            as={as || 'div'}
        >
            {children}
        </Container>
    );
};

export default Section;
