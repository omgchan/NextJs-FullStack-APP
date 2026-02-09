import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Blog() {
  const data = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      desc: 'Explore the latest trends in web development, including AI integration, progressive web apps, and the rise of serverless architecture.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      url: '/blog/1',
      date: 'Jan 15, 2025',
      author: 'John Doe'
    },
    {
      id: 2,
      title: 'Mastering React: Advanced Patterns and Best Practices',
      desc: 'Deep dive into advanced React patterns including hooks, context API, and performance optimization techniques for building scalable applications.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      url: '/blog/2',
      date: 'Jan 12, 2025',
      author: 'Jane Smith'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use Each',
      desc: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox, with practical examples and use cases for each.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
      url: '/blog/3',
      date: 'Jan 10, 2025',
      author: 'Mike Johnson'
    },
    {
      id: 4,
      title: 'TypeScript Tips: Leveling Up Your Type Safety',
      desc: 'Learn advanced TypeScript techniques to write safer, more maintainable code with better type inference and error prevention.',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      url: '/blog/4',
      date: 'Jan 8, 2025',
      author: 'Sarah Wilson'
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Our Blog</h1>
        <p className={styles.subheading}>Insights, tips, and trends in web development</p>
      </div>

      <div className={styles.itemContainer}>
        {data.map((item) => (
          <Link href={item.url} className={styles.item} key={item.id}>
            <div className={styles.imageContainer}>
              <Image 
                src={item.image} 
                fill={true} 
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