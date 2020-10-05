import React, { Fragment } from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hoverOverLi = (e) => {
    e.target.style.background = '#aa0000';
    e.target.style.cursor = 'pointer';
  }

  hoverOutLi = (e) => {
    e.target.style.background = '#333';
    e.target.style.cursor = 'cursor';
  }


  render() {
    const navStyle = {
      margin: 'auto',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      background: '#333',
      color: '#fff',
      listStyle: 'none',
      width: '600px',
      borderRadius: '0 0 5px 5px',
    }

    const liStyle = {
      padding: '1rem 1rem',
      // border: '1px solid #aa0000',
      width: '150px',
      borderRadius: '0 0 5px 5px'
    }

    return(
      <Fragment>
        <div style={{background: '#000'}}>
          <ul style={navStyle}>
            <li
              style={liStyle}
              onMouseOver={this.hoverOverLi}
              onMouseOut={this.hoverOutLi}
              onClick={this.props.pageHandler}
              name='sponeo'
            >
              Sponeo
            </li>
            <li
              style={liStyle}
              onMouseOver={this.hoverOverLi}
              onMouseOut={this.hoverOutLi}
              onClick={this.props.pageHandler}
              name='addWebsite'
            >
              Add Website
            </li>
            <li
              style={liStyle}
              onMouseOver={this.hoverOverLi}
              onMouseOut={this.hoverOutLi}
              onClick={this.props.pageHandler}
              name='crawlArticles'
            >
              Crawl Articles
            </li>
            <li
              style={liStyle}
              onMouseOver={this.hoverOverLi}
              onMouseOut={this.hoverOutLi}
              onClick={this.props.pageHandler}
              name='displayArticles'
            >
              Display Articles
            </li>
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Navbar;