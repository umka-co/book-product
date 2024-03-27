'use client';
import { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';
import Link from '../Link';
import Typo from '../Typo';

interface Props {
  header: string;
  headerLink: string;
}

/**
 * Renders a header with a link embedded when article is displayed elsewhere
 * @component SmartHeader
 * @param header - content of the header
 * @param headerLink - self link contained in header
 */
const SmartHeader: FunctionComponent<Props> = ({ header, headerLink }) => {
  const router = usePathname();
  return router !== headerLink ? (
    <Link href={headerLink}>
      <Typo tag="h1" variant="header1">
        {header}
      </Typo>
    </Link>
  ) : (
    <Typo tag="h1" variant="header1">
      {header}
    </Typo>
  );
};

export default SmartHeader;
