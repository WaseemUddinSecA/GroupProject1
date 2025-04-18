'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Impact.module.css';

export default function Impact() {
    const [activeYear, setActiveYear] = useState(2023);

    const impactData = {
        2023: {
            carbonReduced: '1,250',
            treesPlanted: '5,000',
            renewableEnergy: '85%',
            communitiesImpacted: '25'
        },
        2022: {
            carbonReduced: '950',
            treesPlanted: '3,500',
            renewableEnergy: '75%',
            communitiesImpacted: '18'
        },
        2021: {
            carbonReduced: '700',
            treesPlanted: '2,000',
            renewableEnergy: '60%',
            communitiesImpacted: '12'
        }
    };

    const initiatives = [
        {
            title: 'Carbon Reduction Program',
            description: 'Our comprehensive program helping businesses reduce their carbon footprint through innovative solutions.',
            icon: '🌱',
            progress: '85%'
        },
        {
            title: 'Renewable Energy Initiative',
            description: 'Transitioning to 100% renewable energy sources across all our operations and partner facilities.',
            icon: '⚡',
            progress: '75%'
        },
        {
            title: 'Community Green Spaces',
            description: 'Creating and maintaining urban green spaces to improve air quality and biodiversity.',
            icon: '🌳',
            progress: '90%'
        }
    ];

    return (
        <Layout>
            <section className={styles.impactHero}>
                <h1 className={styles.impactTitle}>Our Environmental Impact</h1>
                <p className={styles.impactSubtitle}>Making a difference, one step at a time</p>
            </section>

            <section className={styles.statsSection}>
                <div className={styles.yearSelector}>
                    {Object.keys(impactData).map(year => (
                        <button
                            key={year}
                            className={`${styles.yearButton} ${activeYear === parseInt(year) ? styles.active : ''}`}
                            onClick={() => setActiveYear(parseInt(year))}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h3>Carbon Reduced</h3>
                        <p className={styles.statNumber}>{impactData[activeYear].carbonReduced}</p>
                        <p className={styles.statUnit}>tons</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Trees Planted</h3>
                        <p className={styles.statNumber}>{impactData[activeYear].treesPlanted}</p>
                        <p className={styles.statUnit}>trees</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Renewable Energy</h3>
                        <p className={styles.statNumber}>{impactData[activeYear].renewableEnergy}</p>
                        <p className={styles.statUnit}>of total energy</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Communities Impacted</h3>
                        <p className={styles.statNumber}>{impactData[activeYear].communitiesImpacted}</p>
                        <p className={styles.statUnit}>communities</p>
                    </div>
                </div>
            </section>

            <section className={styles.initiatives}>
                <h2 className={styles.sectionTitle}>Our Key Initiatives</h2>
                <div className={styles.initiativesGrid}>
                    {initiatives.map((initiative, index) => (
                        <div key={index} className={styles.initiativeCard}>
                            <div className={styles.initiativeIcon}>{initiative.icon}</div>
                            <h3 className={styles.initiativeTitle}>{initiative.title}</h3>
                            <p className={styles.initiativeDescription}>{initiative.description}</p>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{ width: initiative.progress }}
                                ></div>
                            </div>
                            <span className={styles.progressText}>{initiative.progress} Complete</span>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
} 