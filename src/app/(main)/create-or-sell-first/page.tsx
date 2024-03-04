import { content, link, title } from "@/app/[content]/create-or-sell-first";
import { PUBLIC_URL } from "@/config";

const CreateSellPage = () => content


/**
 * MetaData for the page
 */
export const metadata = {
  title,
  alternates: {
    canonical: `${PUBLIC_URL}${link}`,
  },
};
export default CreateSellPage;
