import React from 'react';
import ActorModel from '../../model/ActorModel';

function ActorCard({ actor }) {
    return (
        <div className="card c-actor" >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{ActorModel.name}</h5>
                <p className="card-text">60</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
}

export default ActorCard;