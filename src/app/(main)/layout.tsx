import { FunctionComponent, PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { APP_NAME, PUBLIC_URL } from '@/config';
import { OPEN_GRAPH_DEFAULT } from '@/app/config';
import { FONTS } from '@/style';
import Analytics from '@/components/Analytics';
import Advertising from '@/components/Advertising';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileOrDesktop from '@/components/MobileOrDesktop';
import StylesInjector from '@/components/StylesInjector';
import './main.css';
import { NavBar, Stack } from '@/components';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  manifest: '/site.webmanifest',
  openGraph: OPEN_GRAPH_DEFAULT,

  // TODO: put your texts here
  title: APP_NAME, // 'Some Public Website',
  description: 'TODO: Cool description for the website, this is used for SEO, so make it good!',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

/**
 * Layout for `(main)` styled pages, renders head and body tags.
 * Applies colors and font(s) to the global CSS variables.
 * @layout Main
 */
const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <StylesInjector />
        <Analytics />
        <Advertising />
      </head>

      <body className={FONTS.default.className}>
        <Header />
        <Stack direction="row" gap='5rem'>
          <div className="content">{children}</div>
          <NavBar />
        </Stack>
        <Footer />

        <MobileOrDesktop />
      </body>
    </>
  );
};

export default MainLayout;
