import { APP_NAME, APP_SHORT_NAME, PUBLIC_URL } from '@/config';
import { Button, Icon, Link, SocialMedia, Stack, Typo, Wrapper } from '@/components';
import { ICONS, IconName } from '@/components/Icon';
import DownloadButton from '@/components/DownloadButton';

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        <Typo variant="header1">{APP_SHORT_NAME}</Typo>
        <Typo tag="p" variant="paragraph">
          Книгой назвать это вряд ли можно, скорее брошюра или методичка. Всего девять страничек.
        </Typo>
        <Typo tag="p" variant="paragraph">
          Рабочее название менялось несколько раз, от разных вариаций «Как сделать успешный IT продукт» до всяких
          хлестких призывов типа «Сначала продай». Пока остановились на варианте: «Как Делать Продукты? 9 вопросов
          самому себе».
        </Typo>
        <Typo tag="p" variant="paragraph">
          Версия на русском языке (так же есть{' '}
          <Link href="https://book-product.karpolan.com/">книга на английском</Link>) полностью доступна онлайн. Все
          равно в русскоязычном сегменте никто не платит… Но если сильно хочется, можете «задонатить» мне на пиво 🙂
          Спасибо!
        </Typo>
        <Stack direction='row' margin='2rem 0'>
          <Button id='button' href='https://www.paypal.com/donate?token=SMui3DovutKgBc_bk2FFUKEU1S5c68ZF7WzwbN6-zvsiHPS5zoZnqksPn2zJoSm4A4nH6mfaPINQqF6U'>Donate on PayPal</Button>
          <Button id='button' href='https://www.patreon.com/join/karpolan?redirect_uri=https%3A%2F%2Fbook-product-ru.karpolan.com%2F&utm_medium=widget'>Become a Patreon member</Button>
        </Stack>
        <Typo>
          Начинайте <Link href='/table-of-contents/'>с оглавления книги</Link> или сразу переходите к чтению с <Link href='/where-to-begin/'>первой главы</Link>, внизу будут ссылки на следующие
          главы.
        </Typo>
        <Typo>
          Приветствуются комментарии «по делу», особенно с примерами и разъяснениями, которые можно добавить в книгу
          потому что «для книги текста мало», «надо больше примеров», «не все понимают с первого раза» и т.д.
        </Typo>
        <Typo>
          Если вам интересно как и почему появился этот набор заметок где «мало букв», но все «кратко и по делу», вот <Link href='/about-book/'>
          краткая история появления этой «книги»
          </Link>
          .
        </Typo>
      </Stack>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Читать ${APP_NAME}`,
  alternates: {
    canonical: PUBLIC_URL,
  },
};

export default HomePage;
