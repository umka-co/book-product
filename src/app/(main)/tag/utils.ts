import { SMART_TAGS, TAGS, Tag } from './config';

/**
 * Generates url for given Tag
 * @param {string} tag Tag name
 * @returns {string} Relative URL
 */
export function tagToUrl(tag: string): string {
  return `/tag/${encodeURI(tag.replace(/ /g, '-'))}/`;
}

/**
 * Returns list of unique Tags from all content files
 * @returns {Promise<string[]>} List of Tags as strings
 */
export async function getTagList() {
  const uniqueTags = TAGS.sort((a, b) => a.name.localeCompare(b.name)).map((current) => current.slug);
  return uniqueTags;
}

export async function getCurrentTagList(tags: string[]) {
  // let tagsList = tags.includes(SMART_TAGS) && tags.map((current) => (current = SMART_TAGS));
  // const tagsList = tags.reduce(())
  // return tagsList;
}

export function getTagBySlug(slug: string): Tag {
  const result = TAGS.find((current) => slug === current.slug) ?? TAGS[0];
  return result;
}

const know_tags: Record<string, any> = {};
let know_tags_count = 0;

export function getSlugByTag(tag: string): string {
  if (know_tags[tag]) {
    return know_tags[tag];
  }

  const encodedTag = encodeURIComponent(tag);
  if (encodedTag === tag) {
    return tag;
  }

  know_tags_count++;
  know_tags[tag] = 'tag' + know_tags_count;
  return know_tags[tag];
}
