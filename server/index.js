const express = require('express');
const app = express();
const cors = require('cors');

const dataBaseFunctions = require('./db.js');
const addWebsite = dataBaseFunctions.addWebsite;
const getCrawlInfo = dataBaseFunctions.getCrawlInfo;

const crawler = require('./crawler.js');
const crawl = crawler.crawl;
const logging = crawler.logging;

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

//Add a new website to the database
app.post('/addWebsite', async(req, res) => {
  try {
    //From client:
    //body: JSON.stringify(this.state)
    //destructuring of the json
    const { site, homepage, newspage, category, sports, geo, article_container, headline_element, href_element } = await req.body;
    await addWebsite(site, homepage, newspage, category, sports, geo, article_container, headline_element, href_element);

    res.send('Successful');
    console.log(`Website has been added: ${req.body}`);
  } catch(err) {
    console.error(err.message);
  }
})

app.get('/crawl', async(req, res) => {
  try {
    const data = await getCrawlInfo(site);
    console.log(data);

    //Pass the data to the crawler and return
    const articles = await crawl(data);
  } catch(err) {
    console.error(err.message);
  }

  res.redirect('/')
})

//Crawl websites and add them to the database


const port = 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
})
