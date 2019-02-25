import React from 'react'
import ReactButton from './react_button'
import CodeSplit from './code_split.jsx'

class ReactEntry extends React.Component {
  render(){
    return(
      <div>
        <ReactButton />
        <CodeSplit />
      </div>
    )
  }
}

export default ReactEntry
