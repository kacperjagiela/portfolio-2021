import * as React from 'react';
import { Image } from '@chakra-ui/react';

const ImgComponent = () => {
    return <Image src="/icons/github.png" alt="github_icon" />;
};

const IconGithub = React.memo(ImgComponent);
export default IconGithub;
