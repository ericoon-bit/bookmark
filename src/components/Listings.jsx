import { useRecoilState } from "recoil";
import { preview } from "~/store";
import cns from "classnames";
import styles from "./styles/listings.module.scss";

export const Listings = () => {
  const [_, setIsPreview] = useRecoilState(preview);

  return (
    <section className={styles.listings__container}>
      <div className={styles.space}>
        <div className={styles.search__wrapper}>
          <span className={styles.ic__search} />
          <input className={styles.input} onChange={null} type="text" defaultValue="title:" />
          <span className={styles.ic__down} />
        </div>
        <div className={styles.add}>
          <span className={styles.ic__add} />
        </div>
        <div className={styles.user__info}>
          <div className={styles.user__avatar}></div>
        </div>
      </div>
      <div className={styles.listings__wrapper}>
        <span className={cns(styles.folder__label, styles.emo__all)}>
          所有书签
        </span>
        <div className={styles.listing__filter}>
          <span>#No Tags</span>
          <div className={styles.filter__btn}>
            <span className={styles.ic__sort}></span>
            <span className={styles.ic__grid}></span>
          </div>
        </div>
        <div className={styles.listings}>
          <ul className={cns(styles.listing__list, styles.grid)}>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <li onClick={() => setIsPreview(true)} key={i} className={styles.listing__item}>
                  <img
                    className={styles.preview__pic}
                    src="https://rdl.ink/render/https%3A%2F%2Fdub.sh%2F_static%2Fthumbnail.png?mode=fillmax&fill=solid&format=webp&width=254&ar=16:9&dpr=2.25"
                    alt=""
                  />
                  <div className={styles.bookmark__info}>
                    <div className={styles.bookmark__site}>
                      <a
                        className={styles.site}
                        target="__blank"
                        href="https://dub.sh"
                      >
                        dub.sh
                      </a>
                      <span className={styles.date}>Nov 7, 2022</span>
                    </div>
                    <div className={styles.bookmark__title}>
                      Dub - Open-Source Bitly Alternative
                    </div>
                    <div className={styles.bookmark__desc}>
                      An open-source link shortener SaaS with built-in analytics
                      and free custom domains.
                    </div>
                    <div className={styles.bookmark__tags}>
                      <span className={styles.ic__hashtag}>No Tags</span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
