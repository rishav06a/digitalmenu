import React from 'react';
// we need to have React to work with JSX

const Card = (props) => {
    // only one element should be returned
    const {name, email, id} = props;
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* template string with javascript variables */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;