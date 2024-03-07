import { content, link, title } from '@/components/[content]/home';

/**
 * Home page content
 * @page Home
 */
const HomePage = () => content;

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: link,
  },
};

export default HomePage;
