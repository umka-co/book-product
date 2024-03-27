import { Stack, Typo } from '@/components';
import SocialMedia from '@/components/SocialMedia';

const BlockSocialMedia = () => {
  return (
    <Stack gap="2rem">
      <Typo variant="header1">Социальные сети</Typo>
      <Typo variant="paragraph">
        Хотите выразить свои мысли или обсудить идеи со мной? Не стесняйтесь связаться! Я всегда рад общению. Вы можете
        отправить мне сообщение через удобные вам социальные сети:
      </Typo>
      <SocialMedia variant="full" />
    </Stack>
  );
};

export default BlockSocialMedia;
