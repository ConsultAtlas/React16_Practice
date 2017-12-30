import React from 'react';

const validation = (props) => {

    let validationMessage = 'This text is long enough.';

    if (props.inputLength <= 5) {
        validationMessage = 'This text is too short!';
    };

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;