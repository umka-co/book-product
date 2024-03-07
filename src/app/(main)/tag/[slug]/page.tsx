import { Metadata, NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { capitalizeAllWords } from '@/utils';
import { Link, Typo, Wrapper } from '@/components';
import { CategoryGroup, TagGroup } from '@/components/Taxonomy';
import { getTagBySlug, getTagList, tagToUrl } from '../utils';
import { ContentFile, contentFileToUrl, getContentFiles } from '@/components/[content]/utils';
import { Page, getAllPageSlugs, getPageBySlug } from '../../book/utils';

interface Props {
  params: {
    slug: string;
  };
}

/**
 * Renders a page with a list of articles for a given tag.
 * @page SingleTag
 */
const SingleTagPage: NextPage<Props> = async ({ params: { slug } }) => {
  const tag = getTagBySlug(slug);
  const slugs = await getAllPageSlugs();
  console.log('slugs', slugs);
  const pages: Page[] = slugs.map((current) => {
    const page = getPageBySlug(current);
    return page;
  });
  console.log('pages', pages);
  console.log('tag', tag);
  const pagesWithTag = pages.filter((current: Page) => {
    console.log('current tag', current);
    return current.tags?.includes(tag.name);
  });
  return (
    <Wrapper tag="section">
      <Typo variant="header1">Tag: &quot;{capitalizeAllWords(tag.name)}&quot;</Typo>
      {pagesWithTag.map(({ content, cats = [], slug = '/', tags = [], title }) => (
        <article key={title}>
          {title && (
            <Typo variant="header2">
              <Link href={`/book/${slug}`}>{title}</Link>
            </Typo>
          )}
          {content}
          {/* {cats?.length > 0 && <CategoryGroup cats={cats} />} */}
          {tags?.length > 0 && <TagGroup tags={tags} />}
        </article>
      ))}
    </Wrapper>
  );
};

/**
 * Returns list of all mentioned tags to generate static pages.
 * @returns {Promise<{ tag: string }[]>} List of all tags.
 */
export async function generateStaticParams() {
  const tags = await getTagList();
  const result = tags.map((current) => ({ slug: current }));
  IS_DEBUG && console.log('tag.generateStaticParams()', JSON.stringify(result));
  return result;
}

/**
 * Generates MetaData for the page based on the route params.
 */
export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const normalizedTag = getTagBySlug(slug).name;
  const title = `${normalizedTag} - Tag - ${APP_NAME}`;
  return { title };
}

export default SingleTagPage;
