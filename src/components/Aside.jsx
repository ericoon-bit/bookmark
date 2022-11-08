import cns from "classnames";
import logo from "~/assets/svg/logo.svg";
import styles from "./styles/aside.module.scss";

export const Aside = () => {
  return (
    <div className={styles.aside__container}>
      <div className={styles.header__wrapper}>
        <embed className={styles.logo} src={logo} type="image/svg+xml" />
        <span className={styles.label}>Biagea</span>
      </div>
      <div className={styles.bookmark__folder}>
        <ul className={styles.folder__list}>
          <li
            className={cns(styles.folder, {
              [styles.active]: true,
            })}
          >
            <span className={cns(styles.folder__label, styles.emo__all)}>所有书签</span>
            <span className={styles.number}>1</span>
          </li>
          <li className={cns(styles.folder)}>
            <span className={cns(styles.folder__label, styles.emo__balloons)}>最近访问</span>
            <span className={styles.number}>0</span>
          </li>
        </ul>
      </div>
      <div className={styles.bookmark__board}>
        <div className={styles.board__label}>
          <span>书签分类</span>
          <i className={cns(styles.ic__add)}></i>
        </div>
        <ul className={styles.folder__list}>
          <li
            className={cns(styles.folder, {
              [styles.active]: false,
            })}
          >
            <span className={cns(styles.folder__label, styles.emo__heart)}>Favourite</span>
            <span className={styles.number}>1</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
