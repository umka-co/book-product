// 'use client';
import { FunctionComponent, PropsWithChildren } from 'react';
// import { usePathname } from 'next/navigation';
import Stack from '../Stack';
import Wrapper from '../Wrapper';
import Typo from '../Typo';
import Link from '../Link';
import { TagGroup } from '../Taxonomy';

interface Props extends PropsWithChildren {
  header: string;
  headerLink: string;
  nextPage: string;
  quote?: string;
  quoteList?: boolean;
  factOne?: string;
  factTwo?: string;
  factThree?: string;
  tags?: string[];
}

const BookPage: FunctionComponent<Props> = ({
  children,
  header,
  headerLink,
  nextPage,
  quote,
  quoteList,
  factOne,
  factTwo,
  factThree,
  tags,
}) => {
  const typoVariant = quoteList ? 'list' : 'header2';
  // const router = usePathname();
  const href = '/book' + nextPage;

  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        {/* {router === '/book/' ? (
          <Link href={headerLink}>
            <Typo tag="h1" variant="header1">
              {header}
            </Typo>
          </Link>
        ) : (
*/}
        <Typo tag="h1" variant="header1">
          {header}
        </Typo>
        {/* )} */}
        {children}
        <Typo bold italic>
          {quoteList ? (
            <Typo variant={typoVariant}>
              <li>{factOne}</li>
              <li>{factTwo}</li>
              <li>{factThree}</li>
            </Typo>
          ) : (
            <Typo variant={typoVariant}>{quote}</Typo>
          )}
        </Typo>
        <Typo>
          <Link href={href}>Читать дальше…</Link>
        </Typo>
        <TagGroup tags={tags} />
      </Stack>
    </Wrapper>
  );
};
export default BookPage;
