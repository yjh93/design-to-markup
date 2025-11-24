import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <article className={styles.hero_wrapper}>
      <div className={styles.text1}>
        <p>Syntekabio</p>
      </div>
      <h2>이 페이지는 테스트 중입니다</h2>
      <h3>면접 과제용으로 제작된 샘플 페이지입니다.</h3>

      <div className={styles.phone_wrapper}>
        <img src='/imgs/main/hero/phone.png' alt='아이폰' className={styles.iphone} />
        <img src='/imgs/main/hero/pad.png' alt='아이패드' className={styles.ipad} />

        <div className={styles.dim}></div>
      </div>
    </article>
  );
}
