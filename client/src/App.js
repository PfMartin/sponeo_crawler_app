import React, { Fragment } from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar.js';
import Sponeo from './components/Sponeo.js';
import AddWebsite from './components/AddWebsite.js';
import CrawlArticles from './components/CrawlArticles.js';
import ShowWebsites from './components/ShowWebsites.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'addWebsite',
    };

    this.pageHandler = this.pageHandler.bind(this);
  }

  pageHandler = (e) => {
    this.setState({
      page: e.target.getAttribute('name'),
    })
  }

  render() {

    return(
      <Fragment>
        <Navbar pageHandler={this.pageHandler} page={this.state.page}/>
        {
          this.state.page === 'addWebsite' ? <AddWebsite/>
          : this.state.page === 'showWebsites' ? <ShowWebsites/>
          : this.state.page === 'crawlArticles' ? <CrawlArticles/>
          : <Sponeo/>
        }
      </Fragment>
    )
  }
}

export default App;
