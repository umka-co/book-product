import { FunctionComponent, PropsWithChildren } from 'react';
import Stack from '../Stack';
import Wrapper from '../Wrapper';
import Typo from '../Typo';
import Link from '../Link';
import { TagGroup } from '../Taxonomy';
import SmartHeader from '../SmartHeader';

interface Props extends PropsWithChildren {
  quoteList?: string[];
  header: string;
  headerLink: string;
  nextPage: string;
  quote?: string;
  tags?: string[];
}

const BookPage: FunctionComponent<Props> = ({ quoteList, children, header, headerLink, nextPage, quote, tags }) => {
  const typoVariant = quoteList ? 'list' : 'header3';
  const href = '/book' + nextPage;
  const headerUrl = '/book' + headerLink;

  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        <SmartHeader header={header} headerLink={headerUrl} />
        {children}
        {quoteList ? (
          <Typo bold italic variant={typoVariant}>
            {quoteList?.map((current) => <li key="quote">{current}</li>)}
          </Typo>
        ) : (
          <Typo bold italic variant={typoVariant}>
            {quote}
          </Typo>
        )}
        <Stack gap="1rem">
          <Typo>
            <Link href={href}>Читать дальше…</Link>
          </Typo>
          <hr />
          <TagGroup tags={tags} />
        </Stack>
      </Stack>
    </Wrapper>
  );
};
export default BookPage;
