import React from 'react';
// we need to have React to work with JSX 

const Card = (props) => {
    // only one element should be returned
    const {name, price, id, image} = props;
    // console.log("image", typeof(image));
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* template string with javascript variables */}
            {/* <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> */}
            {/* <img alt='robots' src={`${image}`} /> */}
            {/* <p>{image}</p> */}
            {/* <img alt='dishes' src={require("../images/alooGobhi.jpg")} width="300" height="300" /> */}
            <img alt='dishes' src={`https://ik.imagekit.io/ctr69l9k4y/${image}`} width="300" height="300" />
            <div>
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>
        </div>
    );
}

export default Card;