'use client';
import { useMemo } from 'react';
import { APP_NAME, OWNER } from '@/config';
import { useIsMobile } from '@/hooks';
import Link from '../Link';
import SocialMedia from '../SocialMedia';
import styles from './Footer.module.css';

/**
 * Renders "Footer" composition.
 * @component Footer
 */
const Footer = () => {
  const isSmallScreen = useIsMobile(320);
  const isMobile = useIsMobile();
  const isNarrowScreen = useIsMobile(1024);
  const logoTextHidden = isSmallScreen || (!isMobile && isNarrowScreen);

  const className = useMemo(
    () => [styles.container, isMobile ? styles.mobile : styles.desktop].filter(Boolean).join(' '),
    [isMobile]
  );

  const copyrightHolder = useMemo(() => <Link href="https://karpolan.com/">{OWNER}</Link>, []);

  return (
    <footer className={styles.footer} id="footer">
      <div className={className}>
        <div className={styles.content}>
          <div className={styles.menu}>
            <Link href="/">Главная</Link>
            <Link href="/table-of-contents/">Оглавление</Link>
            <Link href="/how-everything-began/">История</Link>
          </div>
          <div className={styles.menu}>
            <Link href="/legal/privacy-policy/">Privacy Policy</Link>
            <Link href="/legal/terms-conditions/">Terms of Use</Link>
          </div>
          {!isMobile ? (
            // Desktop version of the footer with copyright
            <div className={styles.copyright}>
              <div>
                Copyright &copy; 2017-{new Date().getFullYear()} {copyrightHolder}
              </div>
            </div>
          ) : (
            // Mobile version of the footer, no copyright
            <span className={styles.text}>
              {APP_NAME}
              <br />
              by {copyrightHolder}
            </span>
          )}
        </div>
        <div className={styles.social}>
          <SocialMedia variant="footer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
