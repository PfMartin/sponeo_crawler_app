import React, { Fragment } from 'react';
import './App.css';

//Components
import AddWebsite from './components/AddWebsite.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }


  render() {
    return(
      <Fragment>
        <div></div>
        <AddWebsite />
      </Fragment>
    )
  }
}

export default App;