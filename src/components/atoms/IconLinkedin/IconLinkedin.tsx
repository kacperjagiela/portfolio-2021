import * as React from 'react';
import { Image } from '@chakra-ui/react';

const ImgComponent = () => {
    return <Image src="/icons/linkedin.png" alt="linkedin_icon" />;
};

const IconLinkedin = React.memo(ImgComponent);
export default IconLinkedin;
