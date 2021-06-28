import Link from 'next/link'
import styles from '../styles/main/header.module.css'

function Header () {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.Banner}>
          <Link href="/main">
            <div className={styles.logo}>ZEHness</div>
          </Link>
          <div className={styles.intro}>
            <Link href="/main/intro">소개</Link>
          </div>
          <div className={styles.project}>
            <Link href="/project">프로젝트</Link>
          </div>
          <div className={styles.blog}>
            <Link href="/main/blog">블로그</Link>
          </div>
          <div className={styles.github}>
            <Link href="/main/github">깃허브</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header