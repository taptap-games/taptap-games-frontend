import Link from 'next/link'
import styles from './footer-styles.module.css'

export default function Footer() {
  return (
  <div className={styles.footer}>
    <div className={styles["footer-container"]}>
      <Link href="/tos">
        <a className={styles["footer-link"]}>Terms of Use</a>
      </Link>
      
      <Link href="/pp">
        <a className={styles["footer-link"]}>Privacy Policy</a>
      </Link>

      <Link href="mailto:vasili.kazhanouski+business@gmail.com">
        <a className={styles["footer-link"]}>Contact Us</a>
      </Link>
    </div>
   </div>
  )
}