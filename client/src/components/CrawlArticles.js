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
    const backgroundStyle = {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    }

    const container = {
      margin: '1rem',
      width: '600px',
      padding: '10px',
      borderRadius: '2px',
      border: '#aa0000 solid 0.08rem',
      textAlign: 'center',
      background: '#333',
      color: '#f3f3f3'
    }

    const line = {
      margin: '0 auto',
      padding: '0.25rem',
      borderBottom: '0.08rem solid #aa0000',
      width: '5rem'
    }

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
        <div style={backgroundStyle}>
          <div style={container}>
            <button onClick={this.onCrawlButton}>Crawl Articles</button>
            <button onClick={this.onDisplayButton}>Display Articles</button>

            <div style={line}></div>

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
