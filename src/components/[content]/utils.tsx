import { ReactNode } from 'react';
import { readdir } from 'node:fs/promises';
import { IS_DEBUG } from '@/config';

export type ContentFile = {
  cats?: string[];
  content: ReactNode;
  href?: string;
  title?: string;
  tags?: string[];
};

/**
 * Converts content file name to the URL
 * @param {string} fileName Name of content file
 * @returns {string} Relative URL
 */
export function contentFileToUrl(fileName: string): string {
  const justName = fileName.substring(0, fileName.indexOf('.')); // File name without extension
  const asArray = justName.split('-');
  const result = '/' + asArray[0] + '/' + asArray[1] + '/' + asArray[2] + '/' + justName.substring(11) + '/';
  return result;
}


/**
 * Returns list of content files
 * @returns {Promise<string[]>} List of content files as strings
 */
export async function getContentFiles(): Promise<string[]> {
  const directoryPath = 'src/app/[content]';
  const fileNames = [];
  try {
    const files = await readdir(directoryPath);
    for (const fileName of files) {
      fileNames.push(fileName);
    }
  } catch (error) {
    console.error('Unable to scan directory: ' + error);
  }

  const result = fileNames
    .filter((file) => !['page.tsx', 'utils.ts'].includes(file))
    .sort((a, b) => b.localeCompare(a, undefined)); // Sort by ISO date in beginning of file name
  IS_DEBUG && console.log('getContentFiles()', result);
  return result;
}