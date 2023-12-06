import { ForwardedRef, forwardRef } from 'react';
import styles from './Checkbox.module.scss';

type PropsCheckbox = {
  type: string;
  id: string;
  label: string;
  error?: string;
};
export const Checkbox = forwardRef(
  (
    { type, id, label, error = '' }: PropsCheckbox,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.checkboxWrapper}>
        <label>
          <input id={id} type={type} ref={ref} />
          <span>{label}</span>
        </label>
        {error ? <p className={styles.error}>{error}</p> : ''}
      </div>
    );
  }
);
