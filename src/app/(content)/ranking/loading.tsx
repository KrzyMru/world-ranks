import styles from "./loading.module.css";
import { regions, statuses } from "./types";

const Loading = () => {
    return (
        <div className={styles.page}>
            <div className={`${styles.header} animation--pulse`}>
                <div className={styles.header__text} />
                <div className={styles.header__search} />
            </div>
            <div className={`${styles.content} animation--pulse`}>
                <div className={styles.filters}>
                    <div className={styles.filters__content}>
                        <div className={styles.filters__text} />
                        <div className={styles.filters__sort} />
                    </div>
                    <div className={styles.filters__content}>
                        <div className={styles.filters__text} />
                        <div className={styles.filters__regions}>
                            {
                                regions.map(region => 
                                    <div 
                                        key={region}
                                        className={`${styles.filters__region} text__sm--bold noselect`}
                                    >
                                        {region}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.filters__content}>
                        <div className={styles.filters__text} />
                        <div className={styles.filters__statuses}>
                            {
                                statuses.map(status => 
                                    <div 
                                        key={status.property}
                                        className={`${styles.filters__status} text__sm--bold noselect`}
                                    >
                                        {status.title}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className={`${styles.ranking} animation--pulse`}>
                    <div className={styles.ranking__header} />
                    <div className={styles.ranking__content} />
                </div>
            </div>
        </div>
    );
}

export default Loading;