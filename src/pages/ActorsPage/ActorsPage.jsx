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
            const searchURL = `https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=${newSearchText}`;
            fetch(searchURL).then(response => response.json()).then(data => {
                console.log(data);
                setResults(data.results.map(tmdbActor => new ActorModel(tmdbActor.name, tmdbActor.profile_path)));
            });
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
                <div className="row">
                    {actors.map((actor, index) => 
                        <div key={index} className="col-md-6 col-lg-3">
                            <ActorCard actor={actor}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ActorsPage;