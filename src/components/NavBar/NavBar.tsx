import { FunctionComponent, useMemo } from 'react';
import { useIsMobile } from '@/hooks';
import Stack from '../Stack';
import Typo from '../Typo';
import Button from '../Button';
import TableOfContent from '../TableOfContent/TableOfContent';
import styles from './NavBar.module.css';

const NavBar: FunctionComponent = () => {
  const isMobile = useIsMobile()
  const className = useMemo(()=>[styles.wrapper, isMobile ? styles.mobile : styles.desktop].filter(Boolean).join(' '),
  [isMobile])
  return (
    <Stack className={className}>
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
     <TableOfContent/>
      <hr />
      <Typo tag="h4" variant="header3">
        РУБРИКИ
      </Typo>
    </Stack>
  );
};
export default NavBar;
