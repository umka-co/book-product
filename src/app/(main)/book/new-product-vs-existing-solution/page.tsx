import { content, link, title } from './config';
import { PUBLIC_URL } from '@/config';

const NewProductVsExistingPage = () => content;

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};

export default NewProductVsExistingPage;
