import { FunctionComponent, useMemo } from 'react';
import { useIsMobile } from '@/hooks';
import Stack from '../Stack';
import Typo from '../Typo';
import Button from '../Button';
import TableOfContent from '../TableOfContent/TableOfContent';
import styles from './NavBar.module.css';

const NavBar: FunctionComponent = () => {
  const isMobile = useIsMobile();
  const isNarrow = useIsMobile(1100);
  const className = useMemo(
    () =>
      [styles.wrapper, isNarrow ? styles.narrow : isMobile ? styles.mobile : styles.desktop].filter(Boolean).join(' '),
    [isMobile, isNarrow]
  );
  return (
    <Stack className={className}>
      <hr />
      <Typo tag="h4" variant="header3">
        СКАЗАТЬ СПАСИБО АВТОРУ
      </Typo>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="BA8Z7FMAFWH4Y" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          // border="0"
          name="submit"
          alt="Помочь автору не умереть с голоду. Спасибо :)"
        />
        {/* <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" /> */}
        <Button type="submit">Donate on PayPal</Button>
      </form>
      <Button href="https://www.patreon.com/join/karpolan?redirect_uri=https%3A%2F%2Fbook-product-ru.karpolan.com%2F&utm_medium=widget">
        Become a Patreon member
      </Button>
      <hr />
      <Typo tag="h4" variant="header3">
        ГЛАВЫ
      </Typo>
      <TableOfContent />
      <hr />
    </Stack>
  );
};
export default NavBar;
