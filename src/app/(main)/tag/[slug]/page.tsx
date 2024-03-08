import { Metadata, NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { capitalizeAllWords } from '@/utils';
import { Link, Typo, Wrapper } from '@/components';
import { TagGroup } from '@/components/Taxonomy';
import { getTagBySlug, getTagList } from '../utils';
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
  const tagTitle = capitalizeAllWords(slug);
  const pagesWithTag: Page[] = [];
  const pageSlugs = await getAllPageSlugs();
  for (const pageSlug of pageSlugs) {
    const page = await getPageBySlug(pageSlug);
    page.slug = pageSlug;
    const tags = page.tags?.map((current) => current.toLocaleLowerCase());
    if (tags?.includes(slug.toLocaleLowerCase())) {
      pagesWithTag.push(page);
    }
  }
  return (
    <Wrapper tag="section">
      <Typo variant="header1">Tag: &quot;{tagTitle}&quot;</Typo>
      {pagesWithTag.map(({ content, slug = '', tags = [], title }) => (
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
