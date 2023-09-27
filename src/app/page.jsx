import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/newHero.svg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Blog Dot-Dev, the best blog for developers!
        </h1>
        <p className={styles.desc}>
          Read about the latest news in the world of programming and web development. Have something to share? Write your own blog post! Explore Blog Dot-Dev and see what's new in the world of tech!
        </p>
        <Button url="/portfolio" text="Explore"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}