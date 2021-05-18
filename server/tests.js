const sitesCheck = require('./sites_check.js');

const logSites = sitesCheck.logSites;

const sites = [
  'fcbayern.com',
  'dierotenbullen.com',
  'bvb.de',
  'borussia.de',
  'bayer04.de',
  'schalke04.de',
  'tsg-hoffenheim.de',
  'scfreiburg.com',
  'bayer04.de',
  'vfl-wolfsburg.de',
  'fcaugsburg.de',
  'profis.eintracht.de',
  'fc-union-berlin.de',
  'herthabsc.com',
  'fc.de/',
  'werder.de',
  'f95.de/',
  'scp07.de',
  'hsv.de',
  'vfb.de',
  'sgf1903.de',
  'fc-heidenheim.de',
  'fc-erzgebirge.de/',
  'ssv-jahn.de/',
  'vfl.de',
  'holstein-kiel.de',
  'svs1916.de',
  'sv98.de/',
  'fcstpauli.com',
  'fcn.de/',
  'hannover96.de/',
  'svww.de',
  'vfl-bochum.de',
  'ksc.de',
  'dynamo-dresden.de/',
  'fcingolstadt.de',
  'tsv1860.de',
  'eintracht.com',
  'fck.de',
  'mainz05.de',
];

const printSites = async() => {
  const missingSites = await logSites(sites, false, true);
  console.log(missingSites);
}

printSites();
