import { Checkbox, Field, Label } from '@headlessui/react';
import styles from "./status-filter.module.css";
import { StatusFilterProps } from './types';
import Image from 'next/image';

const StatusFilter = (props: StatusFilterProps) => {
  const { label } = { ...props }
  
  return (
    <Field className={styles.wrapper}>
      <Checkbox
        {...props}
        className={styles.checkbox}
      >
        <Image 
          src="/icons/Done_round.svg"
          alt=''
          width={20}
          height={20}
          className='noselect'
        />
      </Checkbox>
      <Label className='text__md--medium'>{label}</Label>
    </Field>
  );
}

export default StatusFilter;