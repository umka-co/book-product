import { PUBLIC_URL } from '@/config';
import { content, link, title } from './config';

const BookPage = () => content;

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default BookPage;
