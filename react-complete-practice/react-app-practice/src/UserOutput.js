import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>"{props.userName} is my old username."</p>
      <p>"{props.userName} lets kill this boss real quick"</p>
    </div>
  )
};

export default userOutput;
