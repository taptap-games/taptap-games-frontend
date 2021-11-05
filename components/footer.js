import Link from 'next/link'
import styles from './footer-styles.module.css'

export default function Footer() {
  return (
  <div className={styles.footer}>
    <div className={styles["footer-container"]}>
      <a className={styles["footer-link"]} href="/tos">Terms of Service</a>
      <a className={styles["footer-link"]} href="/pp">Privacy Policy</a>
      <a className={styles["footer-link"]} href="mailto:vasili.kazhanouski+business@gmail.com">Contact Us</a>
    </div>
   </div>
  )
}