import { content, link, title } from '@/app/[content]/where-to-begin';
import { PUBLIC_URL } from '@/config';

const WhereToBeginPage = () => content

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default WhereToBeginPage;
