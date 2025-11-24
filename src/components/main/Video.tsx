import { useEffect, useRef, useState } from 'react';
import styles from './Video.module.scss';

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playedOnce, setPlayedOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !playedOnce) {
          videoRef.current?.play();
          setPlayedOnce(true);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [playedOnce]);

  return (
    <article ref={sectionRef} className={styles.video_wrapper}>
      <h2>테스트용 영상 단락</h2>

      <h3>
        면접 과제용으로 제작된 샘플 영상 단락입니다.
        <br />
        사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.
      </h3>

      <div className={styles.video_container}>
        <video ref={videoRef} muted playsInline>
          <source src='/video/main.mp4' />
        </video>
      </div>
    </article>
  );
}
