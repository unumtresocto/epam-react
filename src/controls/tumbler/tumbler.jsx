import React from 'react';

const Tumbler = ({ name, config, className }) => (
    <div className={ "tumbler " + className }>
        { config.map(item =>
            <div key={ item.id } className="tumbler__option option">
                <input className="option__input" type="radio"
                       name={ name } value={ item.value }
                       id={ item.id }/>
                <label className="option__label" htmlFor={ item.id }>
                    { item.caption }
                </label>
            </div>
        ) }
    </div>
)

export default Tumbler;
