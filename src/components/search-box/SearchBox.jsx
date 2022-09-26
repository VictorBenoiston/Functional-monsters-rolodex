import { Component } from "react";
import './SearchBox.css'

//Functuion

const SearchBox =  props => {
    const {placeHolder, onChangeFn, className } = props
    return (
        <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeHolder || 'Search'} 
        onChange={onChangeFn}/>
    )
}

export default SearchBox
