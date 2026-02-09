import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

function page() {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>

          <Image src="https://images.pexels.com/photos/6340669/pexels-photo-6340669.jpeg"
           alt="about" fill={true} className={styles.image}/>
          <div className={styles.imgText}>
            <h1 className={styles.imageTitle}>Digital StoryTellers</h1>
            <h2 className={styles.imageDes}>Handcrafting award winning digital experiences</h2>

          </div>
          </div>

          <div className={styles.textContainer}>
            <div className={styles.item}>
            
            <h1>Who We Are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam scelerisque aliquam odio et faucibus.
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit.
              <br/>
              <br/>
              Dolorum, blanditiis deserunt aperiam voluptas perferendis possimus 
              numquam amet adipisci esse modi similique quis ea architecto quibusdam mollitia 
              velit accusamus quisquam odio?</p>
            </div>
          <div className={styles.item} >
            <h1>What We Do?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam scelerisque aliquam odio et faucibus.
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit.
              <br/>
              <br/>
              Dolorum, blanditiis deserunt aperiam voluptas perferendis possimus 
              numquam amet adipisci esse modi similique quis ea architecto quibusdam mollitia 
              velit accusamus quisquam odio?</p>
            <Button text="Contact" url="/contact"/>
          </div>
          </div>
        </div>

    
  )
}

export default page