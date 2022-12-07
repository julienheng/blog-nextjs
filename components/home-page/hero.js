import style from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image src="/images/site/pp2.jpg" alt="An Image showing Julien" width={300} height={300} />
      </div>
      <h1>I'm Julien</h1>
      <p>I blog about web development - especially fronted frameworks like React</p>
    </section>
  );
}
