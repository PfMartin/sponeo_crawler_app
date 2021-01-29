import React, { Fragment } from 'react';

class ShowWebsites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: []
    };
  }

  onWebsitesButton = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/getWebsites');

      const jsonData = await response.json();

      this.setState({
        websites: jsonData
      });


      console.log(this.state.websites);
    } catch(err) {
      console.error(err.message);
    }
  }

  render() {

    const liStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr',
    }

    return(
      <Fragment>
        <div className="background">
          <div className="board">
            <button onClick={this.onWebsitesButton}>Show Websites</button>
            <div className="line"></div>
            <h1 style={{margin: '1rem'}}>Websites</h1>
            {
              this.state.websites.map((element) => {
                return(
                  <div
                    key={element.id} style={{textAlign: 'left', marginTop: '1rem'}}>
                    <h3>{element.site}</h3>
                    <ul>
                      <li style={liStyle}>
                        <p>Homepage:</p>
                        <a
                          href={element.homepage}
                          target="_blank"
                          rel="noreferrer noopener"
                          >{element.homepage}
                        </a>
                      </li>
                      <li style={liStyle}>
                        <p>Newspage:</p>
                        <a
                          href={element.newspage}
                          target="_blank"
                          rel="noreferrer noopener"
                          >{element.newspage}
                        </a>
                      </li>
                      <li style={liStyle}>
                        <p>Category:</p>
                        <p>{element.category}</p>
                      </li>
                      <li style={liStyle}>
                        <p>Geo:</p>
                        <p>{element.geo}</p>
                      </li>
                      <div className="line"></div>
                    </ul>
                  </div>
                )
              })
            }

          </div>
        </div>
      </Fragment>
    )
  }
}

export default ShowWebsites;
