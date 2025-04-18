'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Services.module.css';

export default function Services() {
    const [selectedService, setSelectedService] = useState(0);

    const services = [
        {
            title: 'Basic Sustainability',
            price: '$99',
            period: 'per month',
            features: [
                'Carbon Footprint Assessment',
                'Basic Sustainability Report',
                'Monthly Eco Tips',
                'Community Access'
            ],
            description: 'Perfect for individuals and small businesses starting their sustainability journey'
        },
        {
            title: 'Green Business',
            price: '$199',
            period: 'per month',
            features: [
                'All Basic Features',
                'Advanced Carbon Tracking',
                'Sustainability Certification',
                'Green Technology Integration'
            ],
            description: 'Ideal for businesses committed to environmental responsibility'
        },
        {
            title: 'Eco Enterprise',
            price: '$399',
            period: 'per month',
            features: [
                'All Green Business Features',
                'Custom Sustainability Solutions',
                '24/7 Environmental Support',
                'Global Impact Reporting'
            ],
            description: 'For organizations leading the way in environmental innovation'
        }
    ];

    return (
        <Layout>
            <section className={styles.servicesHero}>
                <h1 className={styles.servicesTitle}>Sustainability Plans</h1>
                <p className={styles.servicesSubtitle}>Choose the perfect plan to reduce your environmental impact</p>
            </section>

            <section className={styles.servicesContent}>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`${styles.serviceCard} ${selectedService === index ? styles.selected : ''}`}
                            onClick={() => setSelectedService(index)}
                        >
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <div className={styles.priceContainer}>
                                <span className={styles.price}>{service.price}</span>
                                <span className={styles.period}>{service.period}</span>
                            </div>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            <ul className={styles.featuresList}>
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className={styles.featureItem}>
                                        ✓ {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.selectButton}>
                                {selectedService === index ? 'Selected' : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.additionalInfo}>
                    <h2 className={styles.sectionTitle}>Our Impact</h2>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <h3>Carbon Reduction</h3>
                            <p>Help us achieve our goal of reducing carbon emissions by 50% by 2030</p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3>Renewable Energy</h3>
                            <p>Support our transition to 100% renewable energy sources</p>
                        </div>
                        <div className={styles.infoCard}>
                            <h3>Community Impact</h3>
                            <p>Join our network of eco-conscious businesses making a difference</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
} 