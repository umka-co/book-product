import { Stack, TableOfContent, Typo, Wrapper } from '@/components';
import { PUBLIC_URL } from '@/config';

const title = `Оглавление`;
const link = `${PUBLIC_URL}/table-of-contents/`;

/**
 * Table of Content page
 * @page Table of Content
 */
const TableOfContentPage = () => {
  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        <Typo tag="h1" variant="header1">
          {title}
        </Typo>
        <TableOfContent />
      </Stack>
    </Wrapper>
  );
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
