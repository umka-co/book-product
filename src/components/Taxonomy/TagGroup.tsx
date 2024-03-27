import { FunctionComponent, HTMLAttributes } from 'react';
import Stack from '../Stack';
import Tag from './Tag';
import Typo from '../Typo';
import styles from './Taxonomy.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  tags?: string[];
}

/**
 * Renders list of Tag links
 * @component TagsGroup
 */
const TagsGroup: FunctionComponent<Props> = ({ className, tags = [], ...restOfProps }) => {
  const classesToRender = [styles.group, className].filter(Boolean).join(' ');
  return (
    <Stack
      alignItems="center"
      className={classesToRender}
      direction="row"
      justifyContent="flex-start"
      margin="0.5rem 0 0 0"
      padding="0rem 0.5rem"
      {...restOfProps}
    >
      <Typo bold>Tags:</Typo>
      <ul role="group">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </Stack>
  );
};

export default TagsGroup;
