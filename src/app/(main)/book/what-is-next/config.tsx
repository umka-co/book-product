import { BookPage, Typo } from '@/components';

export const cat = 'Книга';
export const tags = ['Зачем', 'Почему', 'Что'];
export const title = 'Что же дальше?';
export const link = "/what-is-next/"

export const content = (
  <BookPage
    header={title}
    headerLink={link}
    nextPage=""
    quote="В жизни любого продукта наступает «конец», будьте готовы создавать новые продукты, еще и еще."
  >
    <Typo>
      Если вы не ошиблись в расчетах на стадии «идеи» и не врали себе при выборе «свой продукт» vs. «продажа чужого» — у
      вас в руках востребованный продукт. Это очень ценный актив!
    </Typo>
    <Typo>
      Все просто: Доставляйте продукт всем желающим, улучшайте и развивайте его. Несите клиентам радость и берите за это
      деньги.
    </Typo>
    <Typo>Дальше вы будете заниматься обычным бизнесом, задачами роста и оптимизации:</Typo>
    <Typo variant="list">
      <li>Продавать больше и дороже.</li>
      <li>Доставлять быстрее и надежнее.</li>
      <li>Производить дешевле, поддерживать проще и т.д.</li>
      <li>Повторить…</li>
    </Typo>
    <Typo>
      А через некоторое время, но это обязательно случиться рано или поздно, спрос на ваш товар или услугу исчезнет. К
      этому моменту вы или создадите другие продукты, или уйдете в историю…
    </Typo>
    <Typo>
      Именно из-за устаревания продукта и/или исчезновения спроса на услугу, бизнесы долго не живут. А те компании
      которые существуют на рынке более 10 лет зачастую продают совсем не те продукты с которых они начинали.
    </Typo>
    <Typo>
      Но какие бы трудности ни ожидали вас на этом бизнес-пути, лучше где-то «удовлетворить спрос» и уйти в историю, чем
      просто смотреть на мир с «пассажирского кресла».
    </Typo>
  </BookPage>
);