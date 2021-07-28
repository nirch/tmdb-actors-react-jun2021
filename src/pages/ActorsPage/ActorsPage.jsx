import React, { useState } from 'react';
import ActorCard from '../../components/ActorCard/ActorCard';
import SearchBox from '../../components/SearchBox/SearchBox';
import './ActorsPage.css'

function ActorsPage(props) {
    const [serachText, setSearchText] = useState("");
    const [results, setResults] = useState([
        "Brad Pitt",
        "Angelina Jolie",
        "Marlon Brandom"
    ]);

    return (
        <div className="p-actors">
            <div className="container">
                <SearchBox placeholder="Search actors..."
                    searchText={serachText}
                    onSearchChange={e => setSearchText(e.target.value)}
                    results={results}/>
                <ActorCard/>
            </div>
        </div>
    );
}

export default ActorsPage;