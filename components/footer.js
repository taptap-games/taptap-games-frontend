import Link from 'next/link'
import styles from './footer-styles.module.css'

export default function Footer() {
  return (
  <div className={styles.footer}>
    <div className={styles["footer-container"]}>
      <Link href="/tos">
        <p className={styles["footer-link"]}>Terms of Use</p>
      </Link>
      
      <Link href="/pp">
        <p className={styles["footer-link"]}>Privacy Policy</p>
      </Link>

      <Link href="mailto:vasili.kazhanouski+business@gmail.com">
        <p className={styles["footer-link"]}>Contact Us</p>
      </Link>
    </div>
   </div>
  )
}