const obj = {
  site: ['fcbayern.com', 'fcbayern.com', 'fcbayern.com', 'fcbayern.com', 'fcbayern.com'],
  headline: ['Hello', 'World', 'Test', 'each', 'article'],
  href: ['/de/random', 'fcbayern.com', 'https://fcbayern.com/for', '/the', '/article']
}

// const t_stamp = new Date().getTime();
//
// obj.site.forEach((element, index) => {
//   const site = obj.site[index];
//   const headline = obj.headline[index];
//   const href = obj.href[index];
//
//   console.log(t_stamp, site, headline, href);
// })
//
// console.log(`Milliseconds: ${t_stamp}`);
// console.log(`Seconds: ${Math.round(t_stamp / 1000)}`);

let href = ''

if(true) {
  href = obj.href[2];
}

if(!href.includes('https://www.') && !href.includes(obj.site[2])) {
  href = `https://www.${obj.site[2]}${href}`;
} else if(!href.includes('https://')) {
  href = `https://www.${href}`;
} else if(!href.includes('www.')) {
  href = `https://www.${href.slice(8)}`
}



console.log(href);
