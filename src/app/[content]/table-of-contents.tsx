import { Stack, TableOfContent, Typo, Wrapper } from '@/components';
import { APP_NAME, PUBLIC_URL } from '@/config';

export const title = `Оглавление`;
export const link = `${PUBLIC_URL}/table-of-contents/`;

export const content = (
  <Wrapper tag="article">
    <Stack gap="2rem">
      <Typo tag="h1" variant="header1">
        {title}
      </Typo>
      <TableOfContent />
    </Stack>
  </Wrapper>
);
