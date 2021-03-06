import React, { Fragment } from 'react';

class AddWebsite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: '',
      homepage: '',
      newspage: '',
      category: '',
      sports: '',
      geo: '',
      article_container: '',
      headline_element: '',
      href_element: ''
    }
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/addWebsite', {
        method: 'POST', //Post method for sending data to the database
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      });

      window.location = '/';
      console.log(response);
    } catch(err) {
      console.error(err.message);
    }
  }

  render() {

    return(
      <Fragment>
      <div className="background">
        <form
          onSubmit={this.onSubmitForm}
          className="board">
          <h1 className="p1">Add a new website to the database</h1>

          <div className="line"></div>

          <h2 className="p1">1. Website Details</h2>
          <label>
            <p>Institution</p>
            <input
              type='text'
              name='site'
              value={this.state.site}
              onChange={this.setValue}
            />
          </label>
          <label>
            <p>Homepage</p>
            <input
              type='text'
              name='homepage'
              value={this.state.homepage}
              onChange={this.setValue}
            />
          </label>
          <label>
            <p>Newspage</p>
            <input
              type='text'
              name='newspage'
              value={this.state.newspage}
              onChange={this.setValue}
            />
          </label>
          <label>
            <p>Category</p>
            <input
              type='text'
              name='category'
              value={this.state.category}
              onChange={this.setValue}
            />
          </label>
          <label>
            <p>Sports</p>
            <input
              type='text'
              name='sports'
              value={this.state.sports}
              onChange={this.setValue}
            />
          </label>
          <label>
            <p>Geo</p>
            <input
              type='text'
              name='geo'
              value={this.state.geo}
              onChange={this.setValue}
            />
          </label>

          <div className="line"></div>

          <h2 className="p1">2. Structure Of The Website</h2>
          <label>
            <p>Container element of each article</p>
            <input
              type='text'
              name='article_container'
              value={this.state.article_container}
              onChange={this.setValue}
            />
          </label>
          <label>
            <p>Headline element of each article</p>
            <input
              type='text'
              name='headline_element'
              value={this.state.headline_element}
              onChange={this.setValue}
            />
          </label>
          <label>
            <p>URL element of each article</p>
            <input
              type='text'
              name='href_element'
              value={this.state.href_element}
              onChange={this.setValue}
            />
          </label>

          <div className="line"></div>

          <button>Add to database</button>
        </form>
      </div>
      </Fragment>
    )
  }
}

export default AddWebsite;
