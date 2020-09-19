import React from 'react';

import './Search.css';

const Search = (props) => {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="name, id, or type"
        onChange={props.onChange}
        value={props.searchInput} // 2-way binding with state
      />
      <button onClick={props.onSubmit} disabled={props.searchDisabled}>
        Search
      </button>
      <button onClick={props.onClear} disabled={props.clearDisabled}>
        Clear Results
      </button>
    </form>
  );
};

export default Search;
