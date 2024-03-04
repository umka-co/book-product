import { content, link, title } from "@/app/[content]/book";
import { PUBLIC_URL } from "@/config";


/**
 * Book page content
 * @page Book
 */
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
