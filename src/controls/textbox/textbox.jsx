import React from 'react';

const Textbox = ({ defaultValue = '', className }) => (
    <input className={ "textbox " + className } type="text"/>
)

export default Textbox;
