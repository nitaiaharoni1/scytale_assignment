import React from 'react'
import { PrTable } from './components/PrTable';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <PrTable/>
    </div>
  )
}