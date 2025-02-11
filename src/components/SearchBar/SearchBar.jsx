// import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import css from './SearchBar.module.css';
const SearchBar = ({handleSetQuery}) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleSetQuery(value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={css.forma}>
        <input
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          className={css.inpuT}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
