'use client';

import React from 'react';
import Layout from './components/Layout';
import styles from './styles/Home.module.css';

export default function Home() {
  const features = [
    {
      title: 'Sustainable Solutions',
      description: 'Innovative approaches to reduce environmental impact and promote sustainability.',
      icon: '🌱'
    },
    {
      title: 'Carbon Footprint',
      description: 'Track and reduce your carbon emissions with our advanced monitoring tools.',
      icon: '🌍'
    },
    {
      title: 'Green Technology',
      description: 'Cutting-edge eco-friendly technologies for a sustainable future.',
      icon: '💡'
    }
  ];

  return (
    <Layout>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Building a Sustainable Future</h1>
            <p className={styles.heroSubtitle}>
              Join us in creating a positive impact on our environment. Together, we can make
              a difference for generations to come.
            </p>
            <button className={styles.ctaButton}>Make a Difference Today</button>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
