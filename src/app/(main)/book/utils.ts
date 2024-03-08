'use server';
import { PathLike } from 'node:fs';
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
// const isDirectory = (source: PathLike) => lstatSync(source).isDirectory();

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

export async function getPageBySlug(slug: string): Promise<Page> {
  const result = require(`@/app/(main)/book/${slug}/config.tsx`);
  return result;
}
