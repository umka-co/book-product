import { APP_NAME, PUBLIC_URL } from '@/config';
import { Typo, Wrapper } from '@/components';

/**
 * Content of Download page
 * @page Download
 */
const PageAboutBook = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header2">Download</Typo>
      <Typo variant="paragraph">
        <strong>{APP_NAME}</strong> is a small and simple utility... {'Some text here. '.repeat(10)}
      </Typo>
   
      <Typo variant="paragraph">{'Some text here. '.repeat(100)}</Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `История появления ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/about-book/`,
  },
};

export default PageAboutBook;
