const zlib = require('zlib');
const { createReadStream } = require('fs');
const csv = require('csvtojson');
const { filterByCountry } = require('./filter-by-country.js');
const { sumProfit } = require('./sum-profit.js');

createReadStream('data.csv.gz')
  .pipe(zlib.gunzip)
  .pipe(csvParser)
  .on("data", (chunk) => console.log(JSON.parse(chunk)))
 // .pipe(filterByCountry('Italy'))
//  .pipe(sumProfit())
//  .pipe(process.stdout); 
