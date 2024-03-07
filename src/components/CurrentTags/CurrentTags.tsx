import Stack from '../Stack';
import Typo from '../Typo';
import { FunctionComponent } from 'react';

interface Props {
  tags: object[];
}

const CurrentTags: FunctionComponent<Props> = async ({ tags }) => {
  //   const tagList = await getCurrentTagList(tags);
  return (
    <Stack direction="row">
      <Typo>Теги:</Typo>
      {/* <TagGroup tags={tagList} /> */}
    </Stack>
  );
};

export default CurrentTags;
