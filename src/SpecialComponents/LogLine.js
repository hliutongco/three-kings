import React from 'react';

const LogLine = (props) => {
  return (
    <p>{props.displayName}: {props.displayText}</p>
  )
}

export default LogLine;
