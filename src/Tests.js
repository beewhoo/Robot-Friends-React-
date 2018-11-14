
import React from 'react';


const Tests = (props) => {
  if(!props.clicked){
    return <ul>
      <p>Test {props.testNumber} : <span>{props.num}%</span></p>
    </ul>
  } else {
    return null
  }
}

export default Tests;
