import { FunctionComponent, useMemo } from 'react';
import { useIsMobile } from '@/hooks';
import TableOfContent from '../TableOfContent/TableOfContent';
import SupportButtons from '../SupportButtons';
import Stack from '../Stack';
import Typo from '../Typo';
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
      <SupportButtons direction="column" />
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
