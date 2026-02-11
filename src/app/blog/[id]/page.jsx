import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function BlogPost({ params }) {
    const { id } = await params
    
    const data = await fetch(`https://api.vercel.app/blog/${id}`, {
        cache: "no-store",
    })
    
    if (!data.ok) {
        notFound()
    }
    
    const post = await data.json()
    
    return (
        <div className={styles.container}>
            <Link href="/blog">← Back to Blog</Link>
            
            <h1>{post.title}</h1>
            
            <p className={styles.meta}>
                {post.date} By {post.author}
            </p>
            
            <p className={styles.description}>{post.desc}</p>
            
            <div className={styles.content}>
                {post.content}
            </div>
        </div>
    )
}

export default BlogPost