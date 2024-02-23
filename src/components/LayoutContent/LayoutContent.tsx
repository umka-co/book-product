'use client'
import { FunctionComponent, PropsWithChildren, useMemo } from 'react';
import NavBar from '../NavBar';
import Stack from '../Stack';
import { useIsMobile } from '@/hooks';
import styles from './LayoutContent.module.css';



const LayoutContent: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const isMobile = useIsMobile();
  const direction = isMobile ? 'column' : 'row';
  const contentClassName = useMemo(
    () => [styles.content, isMobile ? styles.mobile : styles.desktop].filter(Boolean).join(' '),
    [isMobile]
  );
  return (
    <Stack className={styles.wrapper} direction='row' gap="5rem">
      <div className={contentClassName}>{children}</div>
      <NavBar />
    </Stack>
  );
};

export default LayoutContent;
