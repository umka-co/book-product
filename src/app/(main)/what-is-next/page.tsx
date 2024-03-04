import { content, link, title } from '@/app/[content]/what-is-next';
import { PUBLIC_URL } from '@/config';

const WhatIsNextPage = () => content


/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default WhatIsNextPage