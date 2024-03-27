import { capitalizeAllWords, toCyrillic } from '@/utils';
import { getAllPageSlugs, getPageBySlug } from '../book/utils';
import { IS_DEBUG } from '@/config';

/**
 * Returns list of unique Tags from all content files
 * All tags converted to lowercase
 * @returns {Promise<string[]>} List of Tags as strings
 */
export async function getTagList(): Promise<string[]> {
  let allTags: string[] = [];
  const pageSlugs = await getAllPageSlugs();
  for (const slug of pageSlugs) {
    const { tags } = await getPageBySlug(slug);
    if (Array.isArray(tags)) {
      allTags.push(...tags);
    }
  }
  const uniqueTags: string[] = Array.from(new Set(allTags.map((current) => current.toLocaleLowerCase())));
  const result = uniqueTags.sort((a, b) => a.localeCompare(b));
  IS_DEBUG && console.log('getTagList()', JSON.stringify(result));
  return result;
}
