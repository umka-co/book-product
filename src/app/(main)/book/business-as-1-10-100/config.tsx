import { BookPage, Typo } from '@/components';

export const cat = 'Книга';
export const tags = ['tag1', 'tag2', 'время', 'деньги', 'кто', 'почему'];
export const title = 'Что за формула «1->10->100» ?';
export const link = '/book/business-as-1-10-100/';

export const content = (
  <BookPage
    header={title}
    headerLink={link}
    nextPage="/book/goods-product-or-service/"
    quoteList
    factOne="Не носимся с идей как с «писаной торбой»."
    factTwo="На изготовление/производство тратим не больше 10% средств и времени."
    factThree="Все оставшееся время и силы тратим на продажи и привлечение клиентов."
    tags={tags}
  >
    <Typo>Есть старая поговорка:</Typo>
    <Typo variant="list">
      <li>$1 тому кто придумал.</li>
      <li>$10 тому кто сделал.</li>
      <li>$100 тому кто продал.</li>
    </Typo>
    <Typo>Из нее следуют простая, но в тоже время одна из самых важных, формула в бизнесе:</Typo>
    <Typo variant="list">
      <li>1*x — 1% — на идею, методики, чертежи.</li>
      <li>10*x — 9% — на средства производства, изготовление, зарплаты.</li>
      <li>100*x — 90% — на упаковку, расфасовку, логистику и собственно продажи.</li>
    </Typo>
    <Typo>Где *x любое число большее единицы, в зависимости от аппетитов владельцев бизнеса.</Typo>
    <Typo>
      Обратите внимание что это соотношение, а не абсолютные числа. Продажники любят говорить что «идея ничего не стоит»
      ©. Это не всегда так, если идея имеет реализацию, а на продукт/услугу есть спрос, то «идея» стоит как минимум
      1/100 от прибыли.
    </Typo>
    <Typo>
      Но не впадайте в оптимизм™, переоценивая ценность задумки. «Идея» которая зарабатывает миллионы, обычно
      проработана с финансовым анализом, формулами и точными расчетами, содержит много страниц подробной документации о
      том как изготавливать, распространять, поддерживать «результаты идеи», ну и многое другое.
    </Typo>
    <Typo>
      Главное не забывайте: Сколько бы вы не потратили на изготовление продукта, его продажи и дистрибуция потребует в
      разы больше средств! Не обязательно в 10 раз, все может быть гораздо хуже…
    </Typo>
  </BookPage>
);
