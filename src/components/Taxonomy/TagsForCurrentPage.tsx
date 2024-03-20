'use client';
import { Page, getPageBySlug } from '@/app/(main)/book/utils';
import { usePathname } from 'next/navigation';
import TagGroup from './TagGroup';
import { useEffect, useState } from 'react';

const TagsForCurrentPage = () => {
  const pathname = usePathname();
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {
    async function fetchTags() {
      const slug = pathname.split('/').filter(Boolean).reverse()[0];
      const page: Page = await getPageBySlug(slug);
      if (Array.isArray(page.tags)) {
        setTags(page.tags);
      }
    }
    fetchTags();
  }, [pathname]);

  return pathname !== '/book/' ? <TagGroup tags={tags} /> : null;
};

export default TagsForCurrentPage;
