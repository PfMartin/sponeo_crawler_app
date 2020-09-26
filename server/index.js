const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.js');

//middleware
app.use(cors());
app.use(express.json()); //for req.body

//ROUTES//

//Add a new website to the database
app.post('/websites', async(req, res) => {
  try {
    //From client:
    //body: JSON.stringify(this.state)
    //destructuring of the json
    const { institution, homepage, newspage, category, sports, geo, article_container, headline_element, href_element } = req.body;
    const newWebsite = await pool.query('INSERT INTO sponeo (institution, homepage, newspage, category, sports, geo, article_container, headline_element, href_element) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [institution, homepage, newspage, category, sports, geo, article_container, headline_element, href_element]
  );

  res.json(newWebsite.rows[0]);
  } catch(err) {
    console.error(err.message);
  }
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
})