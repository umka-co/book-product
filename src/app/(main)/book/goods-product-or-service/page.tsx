import { content, link, title } from '@/components/[content]/goods-product-or-service';
import { PUBLIC_URL } from '@/config';

const GoodsProductServicePage = () => content;

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default GoodsProductServicePage;
