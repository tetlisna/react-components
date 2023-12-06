import { ChangeEvent } from 'react';
import styles from './Autocomplete.module.scss';
import React from 'react';
import { countries } from '../../models/constants';
import { FieldValues } from 'react-hook-form';
// import { useAppSelector } from '../../hooks/reduxHooks';

interface PropsAutoComplete extends FieldValues {}

export const Autocomplete = ({ onChange, errors }: PropsAutoComplete) => {
  const [value, setValue] = React.useState('');
  const [countryKey, setCountryKey] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  // const { countries} = useAppSelector()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setValue(value);
    onChange(value);

    if (value) {
      const suggestionsFiltered = Object.values(countries).filter(
        (country: string) => country.toLowerCase().includes(value.toLowerCase())
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
      <label htmlFor="autocomplete">Countries</label>
      <input defaultValue={countryKey} type="hidden"></input>
      <input
        id="autocomplete"
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
      {errors && <p className={styles.error}>{errors.message}</p>}
    </div>
  );
};
