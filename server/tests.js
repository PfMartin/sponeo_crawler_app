const obj = {
  institution: ['FCB', 'FCB', 'FCB', 'FCB', 'FCB'],
  headline: ['Hello', 'World', 'Test', 'each', 'article'],
  href: ['https://random', 'https://href', 'https://for', 'https://the', 'https://article']
}

const t_stamp = new Date().getTime();

obj.institution.forEach((element, index) => {
  const institution = obj.institution[index];
  const headline = obj.headline[index];
  const href = obj.href[index];

  console.log(t_stamp, institution, headline, href);
})

console.log(`Milliseconds: ${t_stamp}`);
console.log(`Seconds: ${Math.round(t_stamp / 1000)}`);
