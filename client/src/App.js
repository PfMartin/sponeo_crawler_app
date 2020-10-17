import React, { Fragment } from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar.js';
import AddWebsite from './components/AddWebsite.js';
import CrawlArticles from './components/CrawlArticles.js';
import DisplayArticles from './components/DisplayArticles.js';

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
    let currentPage;

    if(this.state.page === 'addWebsite') {
      currentPage = <AddWebsite />;
    } else if(this.state.page === 'crawlArticles') {
      currentPage = <CrawlArticles />;
    } else if(this.state.page === 'displayArticles') {
      currentPage = <DisplayArticles />;
    }


    return(
      <Fragment>
        <Navbar pageHandler={this.pageHandler} page={this.state.page}/>
        {currentPage}
      </Fragment>
    )
  }
}

export default App;