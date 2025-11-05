import { Checkbox } from '@headlessui/react';
import styles from "./region-filter.module.css";
import { RegionFilterProps } from './types';

const RegionFilter = (props: RegionFilterProps) => {
  const { text } = { ...props }
  
  return (
      <Checkbox
        {...props}
        className={styles.checkbox}
      >
        <span className='text__sm--bold noselect'>{text}</span>
      </Checkbox>
  );
}

export default RegionFilter;