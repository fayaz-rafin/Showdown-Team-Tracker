import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
         @font-face {
            font-family: 'SF-Pixelate';
            src: url('/Users/hasanimam/Desktop/react apps/Showdown-Team-Tracker/showdown-team-tracker/src/fonts/SF Pixelate Oblique.ttf') format('truetype');
        }
       `}
    />
);

export default Fonts;