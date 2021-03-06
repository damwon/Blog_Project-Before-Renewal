import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import React from 'react'

const main = ({ blogs }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          </Head>
          
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              데이터 통신 테스트
              <span><i class="material-icons">face</i></span>
            </h1>  

            <div className={styles.grid}>
              <ul>
                {blogs.map((item) => (
                  <li key={item.id}>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>
    
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
      )
}

main.getInitialProps = async () => {
    const response = await axios.get('http://localhost:3000/api/blog')
    const data = response.data
    console.log('데이터 통신: ', data)
    return {
        blogs : data
    }
}


export default main