import React from 'react';

const Rating = ({ className, rating }) => (
    <div className={ "rating " + className }>{ rating }</div>
);

export default Rating;
