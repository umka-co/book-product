import { APP_NAME, PUBLIC_URL } from '@/config';
import { Stack, TableOfContent, Typo, Wrapper } from '@/components';

/**
 * Table of Content page
 * @page Table of Content
 */
const TableOfContentPage = () => {
  return (
    <Wrapper tag="article">
      <Stack gap='2rem'>
      <Typo tag='h1' variant='header1'>
      Оглавление
      </Typo>
     <TableOfContent/>
      </Stack>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Оглавление ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/download/`,
  },
};

export default TableOfContentPage;
