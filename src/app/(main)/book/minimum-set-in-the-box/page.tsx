import { content, link, title } from '@/components/[content]/minimum-set-in-the-box';
import { PUBLIC_URL } from '@/config';

const MinimumSetPage = () => content;

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default MinimumSetPage;