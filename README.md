# sponeo_crawler_app
A PERN-Stack application for crawling sport news websites

## Server side

### Crawler
The crawler needs 3 main inputs:
    * articleContainer:
        - Contains the headline in some child element or itself
        - Contains href in some child elment or itself
    * headlineElement:
        - Child element of articleContainer
        - Element that directly contains the headline text
        - Text needs to be retrieved and trimmed
    * hrefElement:
        - Child element of articleContainer
        - Element that directly contains the href
        - **If the articleContainer already contains the href this needs to be an empty string ('')**

    --> These elements define the columns of the websites table in the database

### Database
Tables:
    * Table for website information:
        - insitution: Name of the institution that runs the website
        - homepage: homepage
        - newspage: Website with all the news
        - category: What kind of sports
        - geo: Location of the institution
        - article_container: Relevant for the crawler
        - headline_element: Relevant for the crawler
        - href_element: Relevant for the crawler
    * Table for crawled articles:
        - institution: Name of the institution that uploaded the article
        - headline: Headline of the article
        - href: Link to the full article


## Problems
### Error: Failed to launch the browser process! No usable sandbox!
1. cd <project-dir-path>/node_modules/puppeteer/.local-chromium/linux-<revision>/chrome-linux/
2. sudo chown root:root chrome_sandbox
3. **Copy sandbox executable to a shared location:** sudo cp -p chrome_sandbox /usr/local/sbin/chrome-devel-sandbox
4. **Export CHROME_DEVEL_SANDBOX env variable:** export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox
