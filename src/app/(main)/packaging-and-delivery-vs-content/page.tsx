import { BookPage, Typo } from '@/components';

const PackagingDeliveryPage = () => {
  return (
    <BookPage
      header="Почему упаковка и доставка важнее содержимого?"
      headerLink='/packaging-and-delivery-vs-content/'
      link="/doing-from-the-end/"
      quote="Наличие расфасованного товара (упаковка) в локации потребления (доставка) важнее самого содержимого (продукта)."
    >
      <Typo>
        Если в обертки Snickers®, Twix®, KitKat® и т.д. положить твердый кал, а в банки/бутылки Coke®, Pepsi®, Red
        Bull® налить подкрашенную мочу, упаковки с этим товаром все равно попадут на полки супермаркетов и в
        холодильники потребителей! Да, возможно это будут последние продажи такого товара, более того может разразиться
        нешуточный скандал… Но и скисшее молоко в супермаркетах бывает довольно часто.
      </Typo>
      <Typo>
        Вывод простой: Покупают подходящую по размеру «упаковку» товара в ближайшем «доступном месте», а уже потом
        ожидают «сказочное содержимое» внутри.
      </Typo>
      <Typo>
        Можно пытаться с этим спорить, оперируя к тому, что популярность продукта или бренда была построена именно на
        «качестве содержимого»… Да, скорее всего так и было. Но мы сейчас говорим про важность упаковки и доставки!
      </Typo>
      <Typo>
        Рассказы о том какой хороший, и главное дешевый, киш-миш можно купить в деревнях средиземноморья к бизнесу (ну
        кроме туристического) никакого отношения не имеют. Более того, без правильной упаковки и быстрой доставки, тот
        же самый киш-миш по всему миру не продать.
      </Typo>
    </BookPage>
  );
};
export default PackagingDeliveryPage;
