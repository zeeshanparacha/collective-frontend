import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import styles from "./styles.module.css";

const Search = ({
  query,
  placeholder,
  onChange,
  error,
  _handleSearch,
}) => {
  return (
    <div className={`${styles.search} ${error && styles.error}`}>
      <input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={query}
      />
      {query && <span onClick={() => _handleSearch()} >
        <SearchIcon />
      </span>}
    </div>
  );
};

Search.defaultProps = {
  type: "text",
  placeholder: "Search gists by username...",
};

export default Search;
