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
      borderRadius: '0 0 2px 2px',
    }

    const liStyle = {
      display: 'inline-block',
      padding: '1rem 1rem',
      // border: '1px solid #aa0000',
      width: '150px',
      borderRadius: '0 0 2px 2px',
    }

    const underline = {
      borderBottom: '#aa0000 solid 0.08rem'
    }

    return(
      <Fragment>
        <div style={{background: '#000'}}>
          <ul style={navStyle}>
            <li
              style={this.props.page === 'sponeo' ? {...liStyle, ...underline} : liStyle}
              onMouseOver={this.hoverOverLi}
              onMouseOut={this.hoverOutLi}
              onClick={this.props.pageHandler}
              name='sponeo'
            >
              Sponeo
            </li>
            <li
              style={this.props.page === 'addWebsite' ? {...liStyle, ...underline} : liStyle}
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