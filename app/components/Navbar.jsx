'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    EcoImpact
                </Link>

                <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/about" className={styles.navLink}>Our Mission</Link>
                    <Link href="/services" className={styles.navLink}>Sustainability</Link>
                    <Link href="/impact" className={styles.navLink}>Our Impact</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.menuIcon}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar; 