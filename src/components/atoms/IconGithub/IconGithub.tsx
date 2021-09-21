import * as React from 'react';
import { Image } from '@chakra-ui/react';

const ImgComponent = () => {
    return <Image w={[12, 20]} h={[12, 20]} src="/icons/github.png" alt="github_icon" />;
};

const IconGithub = React.memo(ImgComponent);
export default IconGithub;
