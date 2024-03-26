// import { TagsForCurrentPage } from '@/components/Taxonomy';
import { FunctionComponent, PropsWithChildren } from 'react';

/**
 * Randers page with tags and categories
 */
const SinglePageLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      {/* <TagsForCurrentPage /> */}
    </>
  );
};

export default SinglePageLayout;
