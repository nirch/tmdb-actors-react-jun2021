import React, { useState } from 'react';
import ActorCard from '../../components/ActorCard/ActorCard';
import SearchBox from '../../components/SearchBox/SearchBox';
import ActorModel from '../../model/ActorModel';
import './ActorsPage.css'

function ActorsPage(props) {
    const [actors, setActors] = useState([]);
    const [serachText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    function searchChange(e) {
        const newSearchText = e.target.value;

        setSearchText(newSearchText);

        if (newSearchText) {
            // Dummy results (this will be taken from TMDB)
            setResults([new ActorModel("Brad Pitt"), new ActorModel("Angelina Jolie"), new ActorModel("Marlon Brandon")]);
        } else {
            setResults([]);
        }
    }

    function addActor(resultIndex) {
        // const newActors = [...actors];
        // newActors.push(results[resultIndex]);
        // setActors(newActors);
        setActors(actors.concat(results[resultIndex]));
        setResults([]);
        setSearchText("");
    }

    return (
        <div className="p-actors">
            <div className="container">
                <SearchBox placeholder="Search actors..."
                    searchText={serachText}
                    onSearchChange={searchChange}
                    results={results.map(result => result.name)}
                    onResultSelected={addActor}/>
                {actors.map((actor, index) => <ActorCard key={index} actor={actor}/>)}
            </div>
        </div>
    );
}

export default ActorsPage;