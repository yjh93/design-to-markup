// 'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ImageSlide.module.scss';

export default function ImageSlide() {
  return (
    <article className={styles.image_slide_wrapper}>
      <div className={styles.image_slide_content}>
        <h2>테스트용 이미지 카드 단락입니다</h2>
        <h3>
          면접 과제용으로 제작된 샘플 단락입니다.
          <br />
          인터렉션, 코드 구조등을 자유롭게 구현하세요.
        </h3>

        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={12}
          pagination={true}
          modules={[Pagination]}
          className={styles.image_swiper}
        >
          <SwiperSlide>
            <img src='/imgs/main/image_slide/img.png' alt='산' />
            <div>
              <p>과제용 카드</p>
              <p>인터렉션, 코드 구조등을 자유롭게 구현하세요.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src='/imgs/main/image_slide/img.png' alt='산' />
            <div>
              <p>과제용 카드</p>
              <p>
                이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다. 모든 내용은
                테스트 목적의 더미 데이터입니다.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </article>
  );
}
