import { content, link, title } from "@/app/[content]/business-as-1-10-100";
import { PUBLIC_URL } from "@/config";

const BusinessPage = () => content


/**
 * MetaData for the page
 */
export const metadata = {
    title,
    alternates: {
      canonical: `${PUBLIC_URL}${link}`,
    },
  };
export default BusinessPage;
