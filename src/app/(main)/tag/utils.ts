import { capitalizeAllWords, toCyrillic } from '@/utils';
import { getAllPageSlugs, getPageBySlug } from '../book/utils';
import { IS_DEBUG } from '@/config';

export function normalizeTag(tag: string): string {
  return tag.toLocaleLowerCase().replace(/ /g, '-');
}

export function tagToText(tag: string): string {
  return capitalizeAllWords(toCyrillic(tag.replace(/-/g, ' ')));
}

/**
 * Generates url for given Tag
 * @param {string} tag Tag name
 * @returns {string} Relative URL
 */
export function tagToUrl(tag: string): string {
  return `/tag/${normalizeTag(tag)}/`;
}

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
