import { PathLike, lstatSync } from 'node:fs';
import { readdir, lstat } from 'node:fs/promises';
import { ReactNode } from 'react';

export type Page = {
  cats?: string[];
  content: ReactNode;
  slug?: string;
  title?: string;
  tags?: string[];
};

const isDirectory = async (source: PathLike) => (await lstat(source)).isDirectory();

export async function getAllPageSlugs(): Promise<string[]> {
  const directoryPath = 'src/app/(main)/book';
  const dirNames = [];
  try {
    const files = await readdir(directoryPath);
    console.log('files', files);
    for (const fileName of files) {
      if (await isDirectory(directoryPath + '/' + fileName)) {
        dirNames.push(fileName);
      }
    }
  } catch (error) {
    console.error('Unable to scan directory: ' + error);
  }
  return dirNames;
}

export function getPageBySlug(slug: string): Page {
  const result = require(`@/app/(main)/book/${slug}/config.tsx`);
  return result;
}
