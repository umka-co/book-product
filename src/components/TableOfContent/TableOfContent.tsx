import { FunctionComponent } from 'react';
import Typo from '../Typo';
import Link from '../Link';

const TableOfContent: FunctionComponent = () => {
  return (
    <Typo variant="list">
      <li>
        <Link href="/book/where-to-begin/">С чего начать?</Link>
      </li>
      <li>
        <Link href="/book/new-product-vs-existing-solution/">А нужно ли создавать новый продукт?</Link>
      </li>
      <li>
        <Link href="/book/business-as-1-10-100/">
          Что за формула «1-{'>'}10-{'>'}100» ?
        </Link>
      </li>
      <li>
        <Link href="/book/goods-product-or-service/">У нас товар, продукт или сервис?</Link>
      </li>
      <li>
        <Link href="/book/create-or-sell-first/">Сначала создать или сначала продать?</Link>
      </li>
      <li>
        <Link href="/book/minimum-set-in-the-box/">Что такое «минимальный набор в коробке»?</Link>
      </li>
      <li>
        <Link href="/book/packaging-and-delivery-vs-content/">Почему упаковка и доставка важнее содержимого?</Link>
      </li>
      <li>
        <Link href="/book/doing-from-the-end/">Как это «делать с конца»?</Link>
      </li>
      <li>
        <Link href="/book/what-is-next/">Что же дальше?</Link>
      </li>
    </Typo>
  );
};

export default TableOfContent;
