import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Portfolio() {
  const galleries = [
    { id: 'illustrations', label: 'Illustrations', image: '/illustration.png' },
    { id: 'websites', label: 'Websites', image: '/websites.jpg' },
    { id: 'apps', label: 'Apps', image: '/apps.jpg' }
  ]

  return (
    <div className={styles.container}>
      
      <h2 className={styles.h2}>Choose a Gallery</h2>
      <div className={styles.galleryContainer}>
        {galleries.map(gallery => (
          <Link href={`/portfolio/${gallery.id}`} key={gallery.id}>
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={gallery.image} 
                  alt={gallery.label}
                  fill
                  className={styles.image}
                />
                <h2>{gallery.label}</h2>
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio