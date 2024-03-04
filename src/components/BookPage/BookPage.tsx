'use client';
import { FunctionComponent, PropsWithChildren } from 'react';
import Stack from '../Stack';
import Wrapper from '../Wrapper';
import Typo from '../Typo';
import Link from '../Link';
import { usePathname } from 'next/navigation';

interface Props extends PropsWithChildren {
  header: string;
  headerLink: string;
  nextPage: string;
  quote?: string;
  quoteList?: boolean;
  factOne?: string;
  factTwo?: string;
  factThree?: string;
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
}) => {
  const typoVariant = quoteList ? 'list' : 'header2';
  const router = usePathname();

  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        {router === '/book/' ? (
          <Link href={headerLink}>
            <Typo tag="h1" variant="header1">
              {header}
            </Typo>
          </Link>
        ) : (
          <Typo tag="h1" variant="header1">
            {header}
          </Typo>
        )}
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
          <Link href={nextPage}>Читать дальше…</Link>
        </Typo>
      </Stack>
    </Wrapper>
  );
};
export default BookPage;
