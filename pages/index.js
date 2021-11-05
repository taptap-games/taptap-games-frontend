import Head from 'next/head'
import styles from '../styles/main.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div
      style={{
        padding: "0",
        margin: "0",
        backgroundImage: "url(./background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}>

      <Head>
        <title>DmSroik Games</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="DmSroik Games" />
        <meta property="og:description" content="Home of DmSroik Games" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.about}>
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            lineHeight: "1",
            margin: "0 0 1rem 0"
          }}>
            DmSroik Games
          </h1>

          <p style={{
            fontSize: "1rem",
            fontWeight: "500",
            lineHeight: "1.5",
            margin: "0 0 0 0"
          }}>
            We are young game development studio located in Minsk. We are here to spend your time playing our games 🎮 😍
          </p>
        </div>

        <Footer />
      </main>
    </div>
  )
}
