import { content, link, title } from '@/components/[content]/doing-from-the-end';
import { PUBLIC_URL } from '@/config';

const DoingFromEndPage = () => content;

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default DoingFromEndPage;
