import Head from 'next/head'
import styles from '../styles/main.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div 
      style={{
        padding: "0 0 0 0",
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
        <Footer/>
      </main>
    </div>
  )
}
