import { Metadata } from 'next';
import { APP_NAME } from '@/config';
import { Button, Stack, Typo, Wrapper } from '@/components';
import { getTagList, tagToUrl } from './utils';
import Tag from '@/components/Taxonomy/Tag';

/**
 * Renders a page with a list of all tags.
 * @page AllTags
 */
const AllTagsPage = async () => {
  const tags = await getTagList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">All Tags</Typo>
      <Stack direction="row">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </Stack>
    </Wrapper>
  );
};

/**
 * Generates MetaData for the page based on the route params.
 */
export async function generateMetadata(): Promise<Metadata> {
  const tags = await getTagList();
  const title = `Tags - ${APP_NAME}`;
  const keywords = tags.join(', ');
  return { keywords, title };
}

export default AllTagsPage;
