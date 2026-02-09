import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/button'
import Image from 'next/image'

async function Categories({params}) {
  const {categories} =  await params
  const data = [
    {
      id: 1,
      title: 'Modern Web Design',
      desc: 'Creating stunning, responsive websites with cutting-edge design principles and user-centered approach.',
      image: 'https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg'
    },
    {
      id: 2,
      title: 'Brand Identity',
      desc: 'Developing unique brand identities that resonate with your target audience and stand out in the market.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg'
    },
    {
      id: 3,
      title: 'User Experience',
      desc: 'Crafting intuitive interfaces and seamless user experiences that drive engagement and satisfaction.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    },
    {
      id: 4,
      title: 'Mobile Applications',
      desc: 'Building powerful mobile apps that are fast, reliable, and deliver exceptional user value.',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'
    },
    {
      id: 5,
      title: 'Digital Marketing',
      desc: 'Strategic digital marketing solutions to boost your online presence and reach your goals.',
      image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg'
    },
    {
      id: 6,
      title: 'Creative Strategy',
      desc: 'Innovative creative strategies tailored to your business needs and market opportunities.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{categories}</h1>

      <div className={styles.itemsGrid}>
        {data.map ((item) => {
          return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.desc}</p>
              <Button className={styles.button} url="/" text="See More..." />
            </div>

          <div className={styles.imageContainer}>
            <Image src={item.image} 
            fill={true} alt="Image"
            className={styles.image} />
          </div>
          </div>
            
          )
        })}
      </div>
      








      

      
    </div>
  )
}

export default Categories