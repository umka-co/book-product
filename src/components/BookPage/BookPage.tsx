import { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import Stack from '../Stack';
import Wrapper from '../Wrapper';
import Typo from '../Typo';
import Link from '../Link';

interface Props extends PropsWithChildren {
  header: string;
  link: string;
  quote: string;
  quoteList?: boolean;
  factOne?: string;
  factTwo?: string;
  factThree?: string;
}

const BookPage: FunctionComponent<Props> = ({
  children,
  header,
  link,
  quote,
  quoteList,
  factOne,
  factTwo,
  factThree,
}) => {
  const typoVariant = quoteList ? 'list' : 'header2';
  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        <Typo tag="h1" variant="header1">
          {header}
        </Typo>
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
          <Link href={link}>Читать дальше…</Link>
        </Typo>
      </Stack>
    </Wrapper>
  );
};
export default BookPage;
