import React from "react";

const Scroll = (props) => {
    // Scroll is not a self enclosing componenet it's a wrap
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;