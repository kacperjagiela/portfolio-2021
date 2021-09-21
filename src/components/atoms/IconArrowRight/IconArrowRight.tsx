import * as React from 'react';
import Icon from '@chakra-ui/icon';

const SvgComponent = () => {
    return (
        <Icon viewBox="0 0 32 32" w="8" h="8">
            <path
                d="M22.667 10.667L28 16m0 0l-5.333 5.333M28 16H4"
                stroke="#111"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
};

const IconArrowRight = React.memo(SvgComponent);
export default IconArrowRight;
