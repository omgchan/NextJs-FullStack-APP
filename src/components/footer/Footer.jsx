import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';


function Footer() {
  return (
    <div className={styles.container}>
      <p>© 2026 Chandan Vomjan. All rights reserved.</p>
      <div className={styles.socials}>

        <Link href='https://www.facebook.com/chandan.vomjan' target='_blank'>
          <Image src="/1.png" width={15} height={15}  className={styles.icon} alt="facebook" />
        </Link>

        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="instagram" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="twitter" />
        <Image src="/4.png" width={15} height={15}  className={styles.icon}alt="linkedin" />
      </div>
    </div>
  )
}

export default Footer