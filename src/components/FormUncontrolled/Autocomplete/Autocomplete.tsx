import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import styles from './Autocomplete.module.scss';
import React from 'react';
import { countries } from '../../../models/constants';

type PropsAutoComplete = {
  id: string;
  label: string;
  error: string;
};

export const Autocomplete = forwardRef(
  (
    { id, label, error }: PropsAutoComplete,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [value, setValue] = React.useState('');
    const [countryKey, setCountryKey] = React.useState('');
    const [suggestions, setSuggestions] = React.useState<string[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.trim();
      setValue(value);

      if (value) {
        const suggestionsFiltered = Object.values(countries).filter(
          (country: string) =>
            country.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(suggestionsFiltered);
      } else {
        setSuggestions([]);
      }
    };

    const handleClickSuggestion = (selectedSuggestion: string) => {
      setValue(selectedSuggestion);
      const countriesArray = Object.entries(countries);
      const selectedCountry = countriesArray.find(
        ([, country]) => country === selectedSuggestion
      );

      if (selectedCountry) {
        setCountryKey(selectedCountry[0]);
      }
      setSuggestions([]);
    };

    return (
      <div className={styles.autocomplete}>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} defaultValue={countryKey} type="hidden"></input>
        <input
          id={id}
          type="search"
          name="country"
          placeholder="Choose Country"
          value={value}
          onChange={handleChange}
        />
        {suggestions.length > 0 && (
          <ul className={styles.autocompleteList}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleClickSuggestion(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {error ? <p className={styles.error}>{error}</p> : ''}
      </div>
    );
  }
);
