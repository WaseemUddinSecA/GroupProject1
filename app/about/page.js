'use client';

import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
    const teamMembers = [
        {
            name: 'Waseem',
            role: 'Environmental Director',
            bio: 'Leading our sustainability initiatives with over 10 years of experience in environmental management.',
            icon: '🌱'
        },
        {
            name: 'Calvin',
            role: 'Sustainability Expert',
            bio: 'Specializing in green technology and renewable energy solutions.',
            icon: '🌍'
        },
        {
            name: 'Elijah',
            role: 'Community Outreach',
            bio: 'Connecting with local communities to promote environmental awareness and action.',
            icon: '🤝'
        },
        {
            name: 'Mohammed',
            role: 'Green Technology Lead',
            bio: 'Developing innovative solutions for sustainable living and business practices.',
            icon: '💡'
        },
        {
            name: 'Adedolapo',
            role: 'Environmental Policy Advisor',
            bio: 'Ensuring our initiatives align with global environmental standards and best practices.',
            icon: '📊'
        }
    ];

    return (
        <Layout>
            <div className={styles.aboutContent}>
                <div className={styles.aboutHero}>
                    <h1 className={styles.aboutTitle}>Our Mission</h1>
                    <p className={styles.aboutSubtitle}>Creating a sustainable future through innovation and action</p>
                </div>

                <div className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>Our Story</h2>
                    <p className={styles.aboutText}>
                        Founded with a vision to make environmental sustainability accessible to everyone,
                        we&apos;ve grown from a small team of eco-conscious individuals to a leading force in
                        green innovation. Our journey has been marked by continuous learning, adaptation,
                        and a deep commitment to making a positive impact on our planet.
                    </p>
                    <div className={styles.plantImage}>
                        <Image
                            src="/images/plants/office-plant.jpg"
                            alt="Sustainable office environment"
                            width={800}
                            height={400}
                            priority
                        />
                    </div>
                </div>

                <div className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🌱</span>
                            <h3 className={styles.valueTitle}>Sustainability</h3>
                            <p className={styles.valueDescription}>
                                We believe in creating solutions that meet present needs without compromising
                                future generations&apos; ability to meet their own.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>💡</span>
                            <h3 className={styles.valueTitle}>Innovation</h3>
                            <p className={styles.valueDescription}>
                                Constantly seeking new ways to reduce environmental impact through
                                technology and creative thinking.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <span className={styles.valueIcon}>🤝</span>
                            <h3 className={styles.valueTitle}>Community</h3>
                            <p className={styles.valueDescription}>
                                Working together with individuals, businesses, and organizations to
                                create a collective impact.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>Our Team</h2>
                    <div className={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className={styles.teamMember}>
                                <div className={styles.memberIcon}>{member.icon}</div>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                                <p className={styles.memberBio}>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
} 