import { FunctionComponent } from 'react';
import { Button, Stack, Typo } from '..';
import styles from './NavBar.module.css';

const NavBar: FunctionComponent = () => {
  return (
    <Stack className={styles.wrapper}>
      <hr />
      <Typo tag="h4" variant="header3">
        СКАЗАТЬ СПАСИБО АВТОРУ
      </Typo>
      <Button href="https://www.paypal.com/donate?token=SMui3DovutKgBc_bk2FFUKEU1S5c68ZF7WzwbN6-zvsiHPS5zoZnqksPn2zJoSm4A4nH6mfaPINQqF6U">
        Donate on PayPal
      </Button>
      <Button href="https://www.patreon.com/join/karpolan?redirect_uri=https%3A%2F%2Fbook-product-ru.karpolan.com%2F&utm_medium=widget">
        Become a Patreon member
      </Button>
      <hr />
      <Typo tag="h4" variant="header3">
        ГЛАВЫ
      </Typo>
      <Typo variant="list">
        <li>
          <a>С чего начать?</a>
        </li>
        <li> <a>А нужно ли создавать новый продукт?</a></li>
        <li>
          <a>Что за формула «1-{'>'}10-{'>'}100» ?</a>
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
      <hr />
      <Typo tag="h4" variant="header3">
        РУБРИКИ
      </Typo>
    </Stack>
  );
};
export default NavBar;
