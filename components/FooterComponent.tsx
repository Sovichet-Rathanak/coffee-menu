"use client"

import { Icon } from '@iconify/react';
import styles from './FooterComponent.module.css';

export default function FooterComponent() {
  const routeToMap = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className={styles.footer}>
      {/* Decorative background */}
      <div className={styles.footerBg}>
        <div className={`${styles.footerBlur} ${styles.footerBlurLeft}`} />
        <div className={`${styles.footerBlur} ${styles.footerBlurRight}`} />
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSlogan}>
            <h3 className={styles.sloganTitle}>
              Your Daily<br />Dose of Happiness
            </h3>
            <p className={styles.sloganSubtitle}>
              Crafted with love, served with joy
            </p>
          </div>

          <div className={styles.footerContacts}>
            <h4 className={styles.contactsTitle}>Get in Touch</h4>

            <div className={styles.phoneNumbers}>
              <Icon icon="ic:baseline-phone" width="24" />
              <div>
                <a href="tel:+098525655">098 525 655</a><br />
                <a href="tel:+0973333169">097 3333 169</a>
              </div>
            </div>

            <p
              className={styles.contactItem}
              onClick={() => routeToMap('https://www.facebook.com/share/14VCpbSZJUy/')}
            >
              <Icon icon="ic:baseline-facebook" width="24" />
              <span>Lucky Tea & Coffee</span>
            </p>

            <p
              className={styles.contactItem}
              onClick={() => routeToMap('https://maps.app.goo.gl/2ofiA6y55g89Vn5NA')}
            >
              <Icon icon="mingcute:location-fill" width="24" />
              <span>Tnol Torteung, Angk Snuol, Kandal</span>
            </p>
          </div>
        </div>

        <div className={styles.footerCopyright}>
          © 2026 Lucky Tea & Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
