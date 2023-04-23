import Image from 'next/image';
import classes from './hero.module.css';
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/site/Xavi.png'}
          alt="an image"
          width={300}
          height={300}
        />
      </div>
      <h2>Hi, I'm Xavi</h2>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
