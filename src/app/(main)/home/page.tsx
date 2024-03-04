import { content, link, title } from '@/app/[content]/home';

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  return content;
};

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
