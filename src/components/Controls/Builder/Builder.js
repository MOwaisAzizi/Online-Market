import React from 'react'

import './Builder.css'

const Builder = (props) => {
  return (
    <div className="builder">
      <div>{props.title}</div>
      <button onClick={props.add}>Add</button>
      <button onClick={props.remove}>Remove</button>
    </div>
  )
}

export default Builder
