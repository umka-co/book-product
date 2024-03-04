import { content, link, title } from '@/app/[content]/packaging-and-delivery-vs-content';
import { PUBLIC_URL } from '@/config';

const PackagingDeliveryPage = () => content

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default PackagingDeliveryPage;
