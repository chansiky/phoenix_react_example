import React from 'react'

class CodeSplit extends React.Component {
  handleClick = () => {
    import('./code_split_moduleA')
      .then(({ moduleA }) => {
        moduleA()
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default CodeSplit
