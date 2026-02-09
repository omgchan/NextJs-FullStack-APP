import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function BlogPost({ params }) {
  const { id } = await params

  // Your blog data (same as in blog list)
  const allPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      desc: 'Explore the latest trends in web development, including AI integration, progressive web apps, and the rise of serverless architecture.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      date: 'Jan 15, 2025',
      author: 'John Doe',
      content: 'Full blog post content here... This is the detailed article about web development trends.'
    },
    {
      id: 2,
      title: 'Mastering React: Advanced Patterns and Best Practices',
      desc: 'Deep dive into advanced React patterns including hooks, context API, and performance optimization techniques for building scalable applications.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      date: 'Jan 12, 2025',
      author: 'Jane Smith',
      content: 'Full blog post content here... This is the detailed article about React patterns.'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use Each',
      desc: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox, with practical examples and use cases for each.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
      date: 'Jan 10, 2025',
      author: 'Mike Johnson',
      content: 'Full blog post content here... This is the detailed article about CSS layouts.'
    },
    {
      id: 4,
      title: 'TypeScript Tips: Leveling Up Your Type Safety',
      desc: 'Learn advanced TypeScript techniques to write safer, more maintainable code with better type inference and error prevention.',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      date: 'Jan 8, 2025',
      author: 'Sarah Wilson',
      content: 'Full blog post content here... This is the detailed article about TypeScript.'
    }
  ]

  // Find the specific post
  const post = allPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <Link href="/blog">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.author}>By {post.author}</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image 
            src={post.image} 
            alt={post.title}
            width={800}
            height={400}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.content}>
          <p>{post.desc}</p>
          <p>{post.content}</p>
        </div>
      </article>

      <div className={styles.relatedPosts}>
        <h2>Related Posts</h2>
        <div className={styles.relatedGrid}>
          {allPosts.filter(p => p.id !== parseInt(id)).slice(0, 3).map(relatedPost => (
            <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className={styles.relatedCard}>
              <div className={styles.relatedImage}>
                <Image 
                  src={relatedPost.image} 
                  alt={relatedPost.title}
                  fill
                  className={styles.image}
                />
              </div>
              <h3>{relatedPost.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost