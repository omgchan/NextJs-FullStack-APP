import Link from 'next/link';
import React from 'react'
import styles from './NavBar.module.css'
import DarkModeToggle from '../darkModeToggle/darkModeToggle';


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];


function NavBar() {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.icon
        }>Italia</Link>

        

        <div className={styles.links}>
          <DarkModeToggle />
            {links.map((link, id) => {
                return (
                    <Link key={id} href={link.url} className={styles.link}>{link.title}</Link>
                )
            })}
        </div>
    </div>
  )
}

export default NavBar