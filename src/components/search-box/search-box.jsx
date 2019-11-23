import React from 'react';
import '../search-box/search-box.css'

export const SearchBox = ({placeholder,handleChange}) =>(
    <input className='search' 
    type = 'Search'
    placeholder = {placeholder}
    onChange = { handleChange }/>
)