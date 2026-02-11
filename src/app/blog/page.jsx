import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'



async function Blog() {
  const data = await fetch('https://api.vercel.app/blog')
  if (!data.ok) {
    throw notFound();
  }
  const posts = await data.json();


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Our Blog</h1>
        <p className={styles.subheading}>Insights, tips, and trends in web development</p>
      </div>

      <div className={styles.itemContainer}>
        {posts.map((item) => (
          <Link href={`/blog/${item.id}`} className={styles.item} key={item.id}>
            <div className={styles.imageContainer}>
              <Image 
                src=
                 { item.image || "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" } 
                fill
                alt={item.title}
                className={styles.image} 
              />
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.author}>By {item.author}</span>
              </div>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.desc}</p>
              <span className={styles.readMore}>Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog