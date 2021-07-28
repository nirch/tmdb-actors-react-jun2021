import React from 'react';

function ActorCard({ actor }) {
    return (
        <div className="card c-actor" >
            <img src={actor.img} className="card-img-top" alt={actor.name} />
            <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text">60</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
}

export default ActorCard;