import { PUBLIC_URL } from '@/config';
import { content, title } from '@/content/how-everything-began';


/**
 * How Everything Began page
 * @page How Everything Began
 */
const HowEverythingBeganPage = () => content;

/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}/about-book/`,
  },
};

export default HowEverythingBeganPage;
