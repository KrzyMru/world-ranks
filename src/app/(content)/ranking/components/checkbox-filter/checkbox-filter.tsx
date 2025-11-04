import { Checkbox, Field, Label } from '@headlessui/react';
import styles from "./checkbox-filter.module.css";
import { CheckboxFilterProps } from './types';
import Image from 'next/image';

const CheckboxFilter = (props: CheckboxFilterProps) => {
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
        />
      </Checkbox>
      <Label className='text__md--medium'>{label}</Label>
    </Field>
  );
}

export default CheckboxFilter;