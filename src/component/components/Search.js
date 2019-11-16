import React from 'react';

const Search = ({ value, onChange, children, onSubmit }) =>
  <form onSubmit={onSubmit}>
    {children}
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button className="button-inline" type='submit'>Click me</button>
  </form>

  export default Search;