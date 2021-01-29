import React, { Fragment } from 'react';

class ShowWebsites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Fragment>
        <h1>ShowWebsites</h1>
        <p>Get websites from the database</p>
        <p>Add drop down menu for category selection</p>
      </Fragment>
    )
  }
}

export default ShowWebsites;
