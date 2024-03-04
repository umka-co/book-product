'use client';
import { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import Stack from '../Stack';
import { useIsMobile } from '@/hooks';
import styles from './LayoutContent.module.css';
import NavBar from '../NavBar';

const LayoutContent: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const isMobile = useIsMobile();
  const isNarrow = useIsMobile(1100);
  const direction = isNarrow ? 'column' : 'row';
  const contentClassName = useMemo(
    () =>
      [styles.content, isNarrow ? styles.narrow : isMobile ? styles.mobile :  styles.desktop].filter(Boolean).join(' '),
    [isMobile, isNarrow]
  );
  return (
    <Stack className={styles.wrapper} direction={direction} gap="5rem">
      <div className={contentClassName}>{children}</div>
      <NavBar />
    </Stack>
  );
};

export default LayoutContent;
