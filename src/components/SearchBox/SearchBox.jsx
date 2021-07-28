import React from 'react';

function SearchBox({placeholder, searchText, onSearchChange}) {
    return (
        <div className="c-searchbox">
            <input type="text" className="form-control" placeholder={placeholder}
                value={searchText} onChange={onSearchChange}/>
        </div>
    );
}

export default SearchBox;