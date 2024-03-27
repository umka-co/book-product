import { capitalizeAllWords, toCyrillic } from '@/utils';

/**
 * Normalizes Tag name to lowercase and replaces spaces with hyphens
 * @param {string} tag - Tag to normalize
 * @returns {string} Normalized tag: "tag name" -> "tag-name"
 */
export function normalizeTag(tag: string): string {
  return tag.toLocaleLowerCase().replace(/ /g, '-');
}

/**
 * Converts Tag name to human-readable text
 * @param {string} tag - Tag name
 * @returns {string} Human-readable text, "tag-name" -> "Tag Name"
 */
export function tagToText(tag: string): string {
  return capitalizeAllWords(toCyrillic(tag.replace(/-/g, ' ')));
}

/**
 * Generates url for given Tag
 * @param {string} tag Tag name
 * @returns {string} URL relative to the root
 */
export function tagToUrl(tag: string): string {
  return `/tag/${normalizeTag(tag)}/`;
}
