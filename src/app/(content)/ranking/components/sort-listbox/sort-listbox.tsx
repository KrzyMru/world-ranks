import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { SortListboxProps } from "./types";
import styles from "./sort-listbox.module.css";
import Image from "next/image";

const SortListbox = (props: SortListboxProps) => {
    const { options, value } = { ...props }

    return (
        <Listbox as="div" {...props} className={styles.listbox__wrapper}>
            <ListboxButton className={`${styles.listbox__button} text__sm--bold noselect`}>
                {value}
                <Image
                    src="/icons/Expand_down.svg"
                    alt=''
                    width={16}
                    height={16}
                    className={`${styles.listbox__icon} noselect`}
                />
            </ListboxButton>
            <ListboxOptions className={styles.listbox__options}>
                {options.map(option => (
                    <ListboxOption
                        key={option} 
                        value={option}
                        className={`${styles.listbox__option} text__sm--bold noselect`}
                    >
                        <Image
                            src="/icons/Done_round.svg"
                            alt=''
                            width={16}
                            height={16}
                            className={`${styles.listbox__check} noselect`}
                        />
                        {option}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}

export default SortListbox;