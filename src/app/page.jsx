import Image from "next/image";
import styles from './page.module.css'
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.heading}>
          Better for your Digital products.
        </h1>
        <p className={styles.description}>
          Turning your ideas into reality. We bring together the best people to create digital products for startups and companies.
        </p>

        <Button text="See Our Works" url="/portfolio"/>

      </div>
      <div className={styles.imgContainer}>
        <Image src="/Hero.png" alt="hero image" fill={true}  />
      </div>
    </div>
  );
}
