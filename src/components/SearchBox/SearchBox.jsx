import React from 'react';

function SearchBox({ placeholder, searchText, onSearchChange, results }) {
    return (
        <div className="c-searchbox">
            <input type="text" className="form-control" placeholder={placeholder}
                value={searchText} onChange={onSearchChange} />
            <ul className="list-group">
                {results.map((result, index) => 
                    <li key={index} className="list-group-item list-group-item-action">{result}</li>)}
            </ul>
        </div>
    );
}

export default SearchBox;