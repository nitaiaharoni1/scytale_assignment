import React  from 'react';

import { GridFilterInputValueProps } from '@material-ui/data-grid';
import styles from './PrTableLabelsFilter.module.scss';

export const PrTableLabelsFilter = ({ item, applyValue }: GridFilterInputValueProps) => {

  const handleFilterChange = (event: any) => {
    const { value } = event?.target;
    applyValue({ ...item, value });
  };

  return (
    <select
      placeholder="Filter value"
      value={item.value}
      onChange={handleFilterChange}
      className={styles.root}
    >
      <option value=''>Any</option>
      <option value='Draft'>Draft</option>
      <option value='Open'>Open</option>
      <option value='Closed'>Closed</option>
    </select>
  );
};