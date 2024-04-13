import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/navbar.css"

export default function SearchBar() {
  return ( 
    <div className='searchbar-container'>
    <div className='input-group input-group-md'> 
      <div className='input-group-prepend'>

      </div>
      <input type='text' className='form-control' aria-label='Large' aria-describedby='inputGroup-sizing-sm'></input>
<span className='input-group-text' id='inputGroup-sizing-lg'>Search</span>
    </div>
    </div>
  )
}
