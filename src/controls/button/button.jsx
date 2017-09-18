import React from 'react';

const Button = ({ caption, className, onClick }) => (
    <button className={"button " + className }
            onClick={ onClick }>{ caption }</button>
)

export default Button;
