import { Link, Stack, SupportButtons, Typo, Wrapper } from '@/components';
import { APP_NAME, APP_SHORT_NAME, PUBLIC_URL } from '@/config';

export const title = `Читать ${APP_NAME}`;
export const link = PUBLIC_URL;

export const content = (
  <Wrapper tag="article">
    <Stack gap="2rem">
      <Typo variant="header1">{APP_SHORT_NAME}</Typo>
      <Typo tag="p" variant="paragraph">
        Книгой назвать это вряд ли можно, скорее брошюра или методичка. Всего девять страничек.
      </Typo>
      <Typo tag="p" variant="paragraph">
        Рабочее название менялось несколько раз, от разных вариаций «Как сделать успешный IT продукт» до всяких хлестких
        призывов типа «Сначала продай». Пока остановились на варианте: «Как Делать Продукты? 9 вопросов самому себе».
      </Typo>
      <Typo tag="p" variant="paragraph">
        Версия на русском языке (так же есть <Link href="https://book-product.karpolan.com/">книга на английском</Link>)
        полностью доступна онлайн. Все равно в русскоязычном сегменте никто не платит… Но если сильно хочется, можете
        «задонатить» мне на пиво 🙂 Спасибо!
      </Typo>
      <SupportButtons direction="row" margin="2rem 0" />
      <Typo>
        Начинайте <Link href="/table-of-contents/">с оглавления книги</Link> или сразу переходите к чтению с{' '}
        <Link href="/book/where-to-begin/">первой главы</Link>, внизу будут ссылки на следующие главы.
      </Typo>
      <Typo>
        Приветствуются комментарии «по делу», особенно с примерами и разъяснениями, которые можно добавить в книгу
        потому что «для книги текста мало», «надо больше примеров», «не все понимают с первого раза» и т.д.
      </Typo>
      <Typo>
        Если вам интересно как и почему появился этот набор заметок где «мало букв», но все «кратко и по делу», вот{' '}
        <Link href="/how-everything-began/">краткая история появления этой «книги»</Link>.
      </Typo>
    </Stack>
  </Wrapper>
);
