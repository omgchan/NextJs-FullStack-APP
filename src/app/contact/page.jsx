import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Let's Keep in Touch</h1>
      <div className={styles.formContainer}>
        <div className={styles.imageContainer}>
          <Image src="/contact.png" alt="Contact" fill={true} className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input}/>
          <input type="email" placeholder='Email' className={styles.input}/>
          <textarea placeholder='Message' className={styles.textArea} cols="30" rows="10"></textarea>
          <Button text="Send" url="#"/>
        </form>

      </div>
    </div>
  )
}

export default Contact