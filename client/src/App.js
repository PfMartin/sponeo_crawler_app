import React, { Fragment } from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Fragment>
        <h1>Hello World</h1>
        <p>First try</p>
      </Fragment>
    )
  }
}

export default App;