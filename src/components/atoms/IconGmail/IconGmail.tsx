import * as React from 'react';
import { Image } from '@chakra-ui/react';

const ImgComponent = () => {
    return <Image src="/icons/gmail.png" alt="gmail_icon" />;
};

const IconGmail = React.memo(ImgComponent);
export default IconGmail;
