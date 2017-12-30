
// ////////////////////////////////////////////////
// Character Component
// ////////////////////////////////////////////////

// This compoent will output individual boxes for each letter characted
// entered into the userInput field. We styled it using an external
// stylesheet just ot get practice doing that.

import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div className="charComponent" onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default charComponent;