import { APP_NAME, PUBLIC_URL } from '@/config';
import { content, link, title } from '@/app/[content]/table-of-contents';

/**
 * Table of Content page
 * @page Table of Content
 */
const TableOfContentPage = () => {
  return content
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

export default TableOfContentPage;
