import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div 
      className={styles.backgroundContainer} 
      style={{
        backgroundImage: "url(./background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
    }}>

      <Head>
        <title>DmSroik Games</title>
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DmSroik Games"/>
        <meta property="og:description" content="Home of DmSroik Games"/>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 

        <div className={styles.grid} >
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

        </div>

      </main>

    </div>
  )
}
