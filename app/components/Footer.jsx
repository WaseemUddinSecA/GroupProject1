'use client';

import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>About Us</h3>
                    <p className={styles.footerText}>
                        We are dedicated to providing the best services and solutions for our clients.
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Quick Links</h3>
                    <ul className={styles.footerLinks}>
                        <li><Link href="/" className={styles.footerLink}>Home</Link></li>
                        <li><Link href="/about" className={styles.footerLink}>About</Link></li>
                        <li><Link href="/services" className={styles.footerLink}>Services</Link></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Contact Us</h3>
                    <p className={styles.footerText}>
                        Email: info@example.com<br />
                        Phone: (123) 456-7890
                    </p>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer; 