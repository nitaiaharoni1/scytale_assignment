import React, { ChangeEvent } from 'react';

import { GridFilterInputValueProps } from '@material-ui/data-grid';
import { Input } from '@material-ui/core';
import styles from './PrTableStatusFilter.module.scss';

export const PrTableStatusFilter = ({ item, applyValue }: GridFilterInputValueProps) => {

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    applyValue({ ...item, value });
  };

  return (
    <div>
      <Input
        classes={{
          root: styles.root,
          input: styles.input
        }}
        margin='none'
        placeholder="Filter value"
        value={item.value}
        onChange={handleFilterChange}
      />
    </div>
  );
};