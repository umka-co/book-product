import { ReactNode } from 'react';
import { lstat, readdir } from 'node:fs/promises';
import { PathLike } from 'node:fs';
import { IS_DEBUG } from '@/config';

export type Page = {
  cats?: string[];
  content: ReactNode;
  slug?: string;
  title?: string;
  tags?: string[];
};

const isDirectory = async (source: PathLike) => (await lstat(source)).isDirectory();

/**
 * Returns a list of all "book pages" as array of slugs
 * @returns {Promise<string[]>} - list of "xxx-yyy-zzz" name of directories
 */
export async function getAllPageSlugs(): Promise<string[]> {
  const directoryPath = 'src/app/(main)/book';
  const dirNames = [];
  try {
    const files = await readdir(directoryPath);
    for (const fileName of files) {
      if (await isDirectory(directoryPath + '/' + fileName)) {
        dirNames.push(fileName);
      }
    }
  } catch (error) {
    console.error('Unable to scan directory: ' + error);
  }
  IS_DEBUG && console.log('getAllPageSlugs()', dirNames);
  return dirNames;
}

/**
 * Returns a page object by its slug
 * @param {string} slug - the slug of the page
 * @returns {Page} - the page object with content, title, tags, cats, etc.
 */
export function getPageBySlug(slug: string): Page {
  let result: Page;
  try {
    result = require(`@/app/(main)/book/${slug}/config.tsx`);
  } catch (error) {
    result = { content: null };
  }
  return result;
}
