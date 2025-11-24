import { useEffect, useState } from 'react';
import styles from './ImageTab.module.scss';

export default function ImageTab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bp, setBp] = useState<'mobile' | 'tablet'>('mobile');

  const tabs = ['탭 영역1', '탭 영역2', '탭 영역3'];

  const images = {
    mobile: [
      '/imgs/main/image_tab/m1.png',
      '/imgs/main/image_tab/m2.png',
      '/imgs/main/image_tab/m3.png',
    ],
    tablet: [
      '/imgs/main/image_tab/t1.png',
      '/imgs/main/image_tab/t2.png',
      '/imgs/main/image_tab/t3.png',
    ],
  };

  const handleResize = () => {
    const w = window.innerWidth;
    if (w <= 431) setBp('mobile');
    else setBp('tablet');
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentImages = images[bp];

  return (
    <article className={styles.image_tab_wrapper}>
      <h2>테스트용 탭 영역 단락 입니다</h2>
      <h3>
        면접 과제용으로 제작된 샘플 탭 단락입니다.
        <br />
        인터렉션, 코드 구조등을 자유롭게 구현하세요.
      </h3>

      <div className={styles.tab_content}>
        <ul className={styles.tab_title_list}>
          {tabs.map((t, i) => (
            <li key={i} onClick={() => setActiveIndex(i)}>
              <p className={activeIndex === i ? styles.active : ''}>{t}</p>
            </li>
          ))}
        </ul>

        <ul className={styles.tab_img_list}>
          {currentImages.map((img, i) => (
            <li key={i} className={activeIndex === i ? styles.show : styles.hide}>
              <img src={img} alt='이미지' />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
