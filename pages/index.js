import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/main.module.css'

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
        <title>TapTap Games</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TapTap Games" />
        <meta property="og:description" content="Home of TapTap Games" />
        <meta name="facebook-domain-verification" content="ic8v67iiufrcndb7g9yv215ir6yvm1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.about}>
          <h1>
            TapTap Games
          </h1>

          <p>
          Big 👋 from <strong>Sroik & Dmitry</strong>. We are young game development studio located in Minsk and our plan is to spend your time playing our games 🎮 😍
          </p>
        </div>

        <Footer />
      </main>
    </div>
  )
}
