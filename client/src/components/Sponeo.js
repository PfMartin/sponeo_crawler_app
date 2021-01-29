import React, { Fragment } from 'react';

class Sponeo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return(
      <Fragment>
        <div className="background">
          <div className="board">
            <h1>Sponeo</h1>
            <a
              style={{fontSize: '0.8rem'}}
              href="https://www.sponeo.de"
              rel="noreferrer noopener"
              >www.sponeo.de
            </a>
          </div>
        </div>
      </Fragment>
    )
  }

}

export default Sponeo;
