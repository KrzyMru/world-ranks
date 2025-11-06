import { InputHTMLAttributes } from "react";
import styles from "./search-bar.module.css";
import Image from "next/image";

const SearchBar = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className={styles.search__wrapper}>
            <input 
                {...props}
                type="search"
                className={`${styles.search__input} text__sm--bold`}
            />
            <Image
                src="/icons/Search.svg"
                alt=''
                width={24}
                height={24}
                className={`${styles.search__icon} noselect`}
            />
        </div>
    );
}

export default SearchBar;