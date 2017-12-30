import React from 'react';

// This is the validation component which will output a paragraph element with the
// validation message. We set up a variable validationMessage to hold our message
// which will be displayed using JSX. Because JSX is just javascript we can write
// logic which counts the length of the input in the userInput field, pass through via
// the props.inoutLength, and lets the user
// know if their input is too short or long enough.
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