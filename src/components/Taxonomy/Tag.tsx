import { FunctionComponent, HTMLAttributes } from 'react';
import { capitalize, toLatin } from '@/utils';
import { tagToUrl } from '@/app/(main)/tag/utils';
import Button from '../Button';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  tag?: string;
}

/**
 * Renders single Tag link
 * @component Tag
 */
const Tag: FunctionComponent<Props> = ({ tag = 'default', ...restOfProps }) => {
  const normalizedTag = toLatin(tag);
  const href = tagToUrl(normalizedTag);
  const words = tag.split(' ').map((word) => word.toLowerCase());
  const text = words.map((word) => capitalize(word)).join(' ');
  return (
    <Button href={href} variant="text" margin="0.125rem" {...restOfProps}>
      {text}
    </Button>
  );
};

export default Tag;
