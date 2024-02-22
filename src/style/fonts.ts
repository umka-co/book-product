import { Merriweather, Montserrat } from 'next/font/google';

// Font 1
const fontMontserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat', // This set a CSS variable for the font, so we don't need to set it manually in the Main layout
  display: 'swap',
});

// Font 2
const fontMerriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-merriweather', // This set a CSS variable for the font, so we don't need to set it manually in the Main layout
  display: 'swap',
});

export const FONTS = {
  default: fontMontserrat, // The default font is used for <body/>, so it should be set here
  montserrat: fontMontserrat,
  merriweather: fontMerriweather,
};

export default FONTS;
