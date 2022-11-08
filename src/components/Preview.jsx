import { useState } from "react";
import { useRecoilState } from "recoil";
import { preview } from "~/store";
import cns from "classnames";
import styles from "./styles/preview.module.scss";

export const Preview = () => {
  const [isPreview, setIsPreview] = useRecoilState(preview);
  const [isMiddle, setIsMiddle] = useState(true);

  return (
    <div
      className={cns(styles.preview__container, {
        [styles.middle]: isPreview && isMiddle,
        [styles.large]: isPreview && !isMiddle,
      })}
    >
      {isPreview && (
        <div
          className={styles.preview__mask}
          onClick={() => {
            setIsPreview(false);
          }}
        />
      )}
      <div className={styles.preview__content}>
          <>
            <div className={styles.preview__header}>
              <div>
                <span className={styles.preview__title}>
                  Dub - Open-Source Bitly Alternative
                </span>
                <p className={styles.preview__desc}>
                  An open-source link shortener SaaS with built-in analytics and
                  free custom domains.
                </p>
              </div>
              <div className={styles.window__handle}>
                <span
                  onClick={() => setIsMiddle((m) => !m)}
                  className={cns({
                    [styles.ic__fullscreen]: isMiddle,
                    [styles.ic__fullscreen_exit]: !isMiddle,
                  })}
                ></span>
                <span
                  onClick={() => setIsPreview(false)}
                  className={styles.ic__close}
                ></span>
              </div>
            </div>
            <div className={styles.handling}>
              <ul className={styles.handling__list}>
                <li>
                  <span className={styles.ic__share}></span>
                </li>
                <li>
                  <span className={styles.ic__link}></span>
                </li>
                <li>
                  <span className={styles.ic__edit}></span>
                </li>
                <li>
                  <span className={styles.ic__delete}></span>
                </li>
              </ul>
            </div>
            <div className={styles.link__wrapper}>
              <div className={styles.link__url}>
                <span className={styles.ic__lock}>https://dub.sh</span>
              </div>
            </div>
            <iframe
              className={styles.viewport}
              src="https://dub.sh"
              frameBorder="0"
              scrolling="auto"
              allow="fullscreen"
            ></iframe>
          </>
      </div>
    </div>
  );
};
