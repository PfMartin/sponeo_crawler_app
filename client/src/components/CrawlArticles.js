import React, { Fragment } from 'react';

class CrawlArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  onCrawlButton = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/crawl', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      window.location = '/';
      console.log(response);
    } catch(err) {
      console.error(err.message);
    }
  }

  onDisplayButton = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/getArticles');
      const jsonData = await response.json();

      this.setState({
        articles: jsonData
      });

      console.log(this.state.articles);
    } catch(err) {
      console.error(err.message);
    }
  }

  render() {
    const metaStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      fontSize: '0.8rem',
      color: '#000'
    }

    const enterMouseArticle = (e) => {
      e.target.style.color = '#888';
    }

    const leaveMouseArticle = (e) => {
      e.target.style.color = '#fff';
    }

    return(
      <Fragment>
        <div className="background">
          <div className="board">
            <button onClick={this.onCrawlButton}>Crawl Articles</button>
            <button onClick={this.onDisplayButton}>Display Articles</button>
            <div className="line"></div>
            <h1 style={{margin: '1rem'}}>Articles</h1>
            {
              this.state.articles.map((element) => {
                return(
                  <ul key={element.id} style={{marginTop: '1rem'}}>
                    <div style={{textAlign: 'left', borderBottom: '#aa0000 solid 0.08rem', padding: '0.2rem'}}>
                      <div className="hello" style={metaStyle}>
                        <p>{element.site}</p>
                        <p>{element.t_stamp.slice(0,10)}</p>
                      </div>
                      <a
                        onMouseEnter={enterMouseArticle}
                        onMouseLeave={leaveMouseArticle}
                        href={element.href}
                        target="_blank"
                        rel="noreferrer noopener"
                      >{element.headline}</a>
                    </div>
                  </ul>
                )
              })
            }

          </div>
        </div>
      </Fragment>
    )
  }
}

export default CrawlArticles;
