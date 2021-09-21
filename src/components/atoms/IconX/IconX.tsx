import * as React from 'react';
import Icon from '@chakra-ui/icon';

const SvgComponent = () => {
    return (
        <Icon viewBox="0 0 24 24" w="6" h="6">
            <path d="M6 18L18 6M6 6l12 12" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
};

const IconX = React.memo(SvgComponent);
export default IconX;
