import React from 'react'
import styles from './page.module.css'


function Layout({ children }) {
  return (
    <div>
        <h1 className={styles.h1}>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout