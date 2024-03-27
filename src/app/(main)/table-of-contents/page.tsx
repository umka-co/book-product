import { Stack, TableOfContent, Wrapper } from '@/components';
import SmartHeader from '@/components/SmartHeader';

const title = 'Оглавление';
const link = '/table-of-contents/';

/**
 * Table of Content page
 * @page Table of Content
 */
const TableOfContentPage = () => {
  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        <SmartHeader header={title} headerLink={link} />
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
