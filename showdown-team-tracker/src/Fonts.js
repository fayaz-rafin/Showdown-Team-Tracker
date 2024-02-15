import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
         @font-face {
            font-family: 'SF-Pixelate';
            src: url('../src/fonts/SF\ Pixelate.ttf') format('truetype');
        }
       `}
    />
);

export default Fonts;