import { TagsForCurrentPage } from '@/components/Taxonomy';
import { FunctionComponent, PropsWithChildren } from 'react';

/**
 * Randers page with tags and categories
 */
const SinglePageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      <TagsForCurrentPage />
    </div>
  );
};

export default SinglePageLayout;
