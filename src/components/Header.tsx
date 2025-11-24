import { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.header_m}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.logo}>
              <a href=''>
                <img src='/imgs/header/logo.png' alt='신테카바이오' />
              </a>
            </h1>

            <button className={styles.menu} onClick={() => setIsOpen(true)}>
              <img src='/imgs/header/menu.png' alt='메뉴 열기' />
            </button>
          </div>
        </header>

        <div className={`${styles.menu_open_wrapper} ${isOpen ? styles.open : ''}`}>
          <div>
            <div className={styles.menu_open_header}>
              <img className={styles.logo} src='/imgs/header/logo.png' alt='신테카바이오' />

              <button className={styles.menu} onClick={() => setIsOpen(false)}>
                <img src='/imgs/header/close.png' alt='메뉴 닫기' />
              </button>
            </div>

            <div className={styles.menu_list_wrapper}>
              <ul className={styles.menu_list}>
                <li>
                  <a href=''>Service</a>
                </li>
                <li>
                  <a href=''>Service menu1</a>
                </li>
                <li>
                  <a href=''>Service menu2</a>
                </li>
                <li>
                  <a href=''>Service menu3</a>
                </li>
                <li>
                  <a href=''>Service menu4</a>
                </li>
              </ul>

              <div className={styles.lang_select_wrapper}>
                <img
                  src='/imgs/header/lang-icon.png'
                  alt='선택 언어'
                  className={styles.lang_icon}
                />
                <ul>
                  <li>한국어</li>
                </ul>
                <img
                  src='/imgs/header/lang-arrow.png'
                  alt='리스트 열기'
                  className={styles.lang_arrow}
                />
              </div>
            </div>
          </div>

          <button className={styles.login}>
            <p>Login</p>
          </button>
        </div>
      </div>

      <div className={styles.header_p}>
        <header className={styles.header}>
          <div>
            <div className={styles.con_left}>
              <h1 className={styles.logo}>
                <a href=''>
                  <img src='/imgs/header/logo.png' alt='신테카바이오' />
                </a>
              </h1>

              <ul className={styles.menu_list}>
                <li>
                  <a href=''>Service Menu1</a>
                </li>
                <li>
                  <a href=''>Service Menu2</a>
                </li>
                <li>
                  <a href=''>Service Menu3</a>
                </li>
                <li>
                  <a href=''>Service Menu4</a>
                </li>
              </ul>
            </div>

            <div className={styles.con_right}>
              <div className={styles.lang_select_wrapper}>
                <img
                  src='/imgs/header/lang-icon.png'
                  alt='선택 언어'
                  className={styles.lang_icon}
                />
                <ul>
                  <li>한국어</li>
                </ul>
                <img
                  src='/imgs/header/lang-arrow.png'
                  alt='리스트 열기'
                  className={styles.lang_arrow}
                />
              </div>

              <button className={styles.login}>login</button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
