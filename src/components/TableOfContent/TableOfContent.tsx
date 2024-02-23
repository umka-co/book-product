import { FunctionComponent } from 'react';
import Typo from '../Typo';



const TableOfContent: FunctionComponent = () => {
  return (
    <Typo variant="list">
      <li>
        <a>С чего начать?</a>
      </li>
      <li>
        <a>А нужно ли создавать новый продукт?</a>
      </li>
      <li>
        <a>
          Что за формула «1-{'>'}10-{'>'}100» ?
        </a>
      </li>
      <li>
        <a>У нас товар, продукт или сервис?</a>
      </li>
      <li>
        <a>Сначала создать или сначала продать?</a>
      </li>
      <li>
        <a>Что такое «минимальный набор в коробке»?</a>
      </li>
      <li>
        <a>Почему упаковка и доставка важнее содержимого?</a>
      </li>
      <li>
        <a>Как это «делать с конца»?</a>
      </li>
      <li>
        <a>Что же дальше?</a>
      </li>
    </Typo>
  );
};

export default TableOfContent;
