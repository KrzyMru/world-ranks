import styles from "./loading.module.css";

const Loading = () => {
    return (
        <div className={styles.page}>
            <div className={`${styles.country__flag} animation--pulse`} />
            <header className={`${styles.country__names} animation--pulse`}>
                <div className={`${styles.country__common} text__xl--semibold`} />
                <div className={`${styles.country__official} text__xl--semibold`} />
            </header>
            <div className={`${styles.country__properties}  animation--pulse`}>
                <div className={styles.country__property} />
                <div className={styles.country__property} />
            </div>
            <div className={`${styles.country__info} animation--pulse`}>
                <div className={styles.info__part} />
                <div className={styles.info__part} />
                <div className={styles.info__part} />
                <div className={styles.info__part} />
                <div className={styles.info__part} />
            </div>
            <div className={`${styles.neighbour__wrapper} animation--pulse`}>
                <div className={styles.neighbour__text} />
                <ul className={styles.neighbour__list}>
                {
                    Array.from({ length: 4 }, (_, i) => (
                        <li key={i} className={styles.neighbour__item}>
                            <div className={styles.neighbour__flag} />
                            <div className={styles.neighbour__name} />
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}

export default Loading;