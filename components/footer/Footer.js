


import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css'
// If using react-icons for the social links:
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏠</span>
            <span className={styles.logoText}>Rent<span className={styles.logoBold}>Manage</span></span>
          </div>
          <p className={styles.description}>
            All-in-one rent management system to simplify your workflow and grow your rental decisions.
          </p>
        </div>

        {/* Links Columns */}
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>PRODUCT</h4>
            <ul>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/updates">Updates</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>COMPANY</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>RESOURCES</h4>
            <ul>
              <li><Link href="/help">Help Center</Link></li>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className={styles.socialSection}>
          <h4 className={styles.columnTitle}>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <hr className={styles.divider} />

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} RentManage. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}