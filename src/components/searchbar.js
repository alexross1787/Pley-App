import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/navbar.css";

import { searchFunction } from '../api/searchFunction';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return ( 
    <div className='searchbar-container'>
      <div className='input-group input-group-md'> 
        <input type='text' className='form-control' aria-label='Large' aria-describedby='inputGroup-sizing-sm' value={searchTerm} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        <div className='input-group-append'>
          <button className='btn btn-outline-secondary' type='button' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}