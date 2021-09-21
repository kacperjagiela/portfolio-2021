import * as React from 'react';
import Icon from '@chakra-ui/icon';

const SvgComponent = () => {
    return (
        <Icon viewBox="0 0 24 24" w="6" h="6">
            <path
                d="M4 6h16M4 12h16m-7 6h7"
                stroke="#111"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
};

const IconHamburger = React.memo(SvgComponent);
export default IconHamburger;
