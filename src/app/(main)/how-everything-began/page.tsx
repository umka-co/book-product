import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';

/**
 * How Everything Began page
 * @page How Everything Began
 */
const HowEverythingBeganPage = () => {
  return (
    <Wrapper tag="article">
      <Stack gap="2rem">
        <Typo tag="h1" variant="header1">
          Как все начиналось?
        </Typo>
        <Typo tag="p" variant="paragraph">
          Во время очередного визита в город Прага у меня было много свободного времени. Я регулярно не мог заснуть
          раньше 2х часов ночи, поэтому решил проводить время более полезно: записывать мысли.
        </Typo>
        <Typo tag="p" variant="paragraph">
          Так родился набор заметок так или иначе связанных с созданием или построением продуктов. «Построение продукта»
          это не о придумывании, и даже не о производстве партий товара — это предварительный маркетинг и все важные
          стадии донесение продукта до потребителя.
        </Typo>
        <Typo tag="p" variant="paragraph">
          Дальше я собрал заметки в виде Google Docs и показал нескольким своим друзьям. Отзывы были скорее
          «положительные», но все отмечали что «для книги текста мало», «надо бы больше примеров», «то что ты понял, не
          значит что и другие поймут» и т.д. Поскольку я сторонник коротких и четких фраз, и не сильно специалист в
          «разжевывании людям по 3 раза», я решил выложить заметки в виде старниц вебсайта с возможность обсуждения
          (blog). Может кто совет даст что добавить или как расписать примеры.
        </Typo>
        <Typo tag="p" variant="paragraph">
          Что из этого получилось — <Link href="/">видите сами</Link>
          🙂
        </Typo>
      </Stack>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `История появления ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/about-book/`,
  },
};

export default HowEverythingBeganPage;
