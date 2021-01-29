const express = require('express');
const app = express();
const cors = require('cors');

const dataBaseFunctions = require('./db.js');
const addWebsite = dataBaseFunctions.addWebsite;
const getCrawlInfo = dataBaseFunctions.getCrawlInfo;
const getArticles = dataBaseFunctions.getArticles;
const getWebsites = dataBaseFunctions.getWebsites;

const crawler = require('./crawler.js');
const crawlAll = crawler.crawlAll;

//middleware
app.use(cors());
app.use(express.json()); //for req.body

/********************************
ROUTES
********************************/
//Homepage
app.get('/', async(req, res) => {
  try {
    res.send('<h1>Welcome to the Sponeo Web Crawler</h1>')
  } catch (err) {
    console.error(err.message);
  }
})

// Add a new website to the database
app.post('/addWebsite', async(req, res) => {
  try {
    // From client:
    // body: JSON.stringify(this.state)
    // destructuring of the json
    const { site, homepage, newspage, category, sports, geo, article_container, headline_element, href_element } = await req.body;
    await addWebsite(site, homepage, newspage, category, sports, geo, article_container, headline_element, href_element);

    res.send('Successful');
    console.log(`Website has been added`);
  } catch(err) {
    console.error(err.message);
  }
})

// Crawl websites and add them to the database
app.get('/crawl', async(req, res) => {
  try {
    crawlAll();
  } catch(err) {
    console.error(err.message);
  }

  res.redirect('/')
})

// Route to get articles from the database and make it accessible for the frontend
app.get('/getArticles', async(req, res) => {
  try {
    const allArticles = await getArticles();

    res.json(allArticles.rows);
  } catch(err) {
    console.error(err.message);
  }
})

// Route to get websites from the database and make them accessible for the frontend
app.get('/getWebsites', async(req, res) => {
  try {
    const websites = await getWebsites();

    res.json(websites.rows);
  } catch(err) {
    console.error(err.message);
  }
})


const port = 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
})
