import * as React from 'react';
import { Image } from '@chakra-ui/react';

const ImgComponent = () => {
    return <Image w={[12, 20]} h={[12, 20]} src="/icons/gmail.png" alt="gmail_icon" />;
};

const IconGmail = React.memo(ImgComponent);
export default IconGmail;
