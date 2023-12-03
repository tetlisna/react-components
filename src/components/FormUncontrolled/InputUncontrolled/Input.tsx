import { ForwardedRef, forwardRef } from 'react';
import styles from '../index.module.scss';

type PropsInput = {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  error?: string;
};
export const Input = forwardRef(
  (
    { type, label, id, placeholder, error = '' }: PropsInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const autocompleteValue = type ? type : undefined;

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          placeholder={placeholder}
          autoComplete={autocompleteValue}
          type={type}
          ref={ref}
        />
        {error ? <p className={styles.error}>{error}</p> : ''}
      </>
    );
  }
);
