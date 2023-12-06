import { ForwardedRef, forwardRef } from 'react';
// import styles from './../FormUncontrolled/index.module.scss';
import { Gender } from '../../../models/constants';
import styles from '../index.module.scss';

type PropsSelect = {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  error?: string;
};
export const Select = forwardRef(
  (
    { label, id, error = '' }: PropsSelect,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <select id={id} ref={ref}>
          <option value="">...</option>
          <option value={Gender.female}>Female</option>
          <option value={Gender.male}>Male</option>
        </select>
        {error ? <p className={styles.error}>{error}</p> : ''}
      </>
    );
  }
);
