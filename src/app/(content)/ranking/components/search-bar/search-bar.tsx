"use client"
import { useState } from "react";
import styles from "./search-bar.module.css";
import Image from "next/image";
import { SearchBarProps } from "./types";

const SearchBar = (props: SearchBarProps) => {
    const { onEnterPress, ...rest } = { ...props }
    const [searchText, setSearchText] = useState<string>("");

    return (
        <div className={styles.search__wrapper}>
            <input 
                {...rest}
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter')
                        onEnterPress(searchText);
                }}
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