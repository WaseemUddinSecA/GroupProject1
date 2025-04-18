'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log('Form submitted:', formData);
    };

    return (
        <Layout>
            <div className={styles.contactContainer}>
                <div className={styles.contactHero}>
                    <h1 className={styles.contactTitle}>Get in Touch</h1>
                    <p className={styles.contactSubtitle}>We&apos;d love to hear from you about your sustainability journey</p>
                </div>

                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>📍</span>
                            <h3>Our Location</h3>
                            <p>123 Green Street, Eco City, EC1 1AA</p>
                        </div>
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>📧</span>
                            <h3>Email Us</h3>
                            <p>info@ecoimpact.com</p>
                        </div>
                        <div className={styles.infoCard}>
                            <span className={styles.infoIcon}>📞</span>
                            <h3>Call Us</h3>
                            <p>+44 (0) 123 456 7890</p>
                        </div>
                    </div>

                    <div className={styles.contactFormContainer}>
                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.plantImage}>
                    <Image
                        src="/images/plants/contact-plant.jpg"
                        alt="Contact us background"
                        width={1200}
                        height={400}
                        className={styles.plantImage}
                    />
                </div>
            </div>
        </Layout>
    );
} 