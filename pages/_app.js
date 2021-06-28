import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/layout.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{height:"100%", backgroundcolor: "red", position: "relative"}}>
      <div className={styles.headerLine}></div>
      <Header />
      <div className={styles.width}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp