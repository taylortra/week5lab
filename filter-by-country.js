const { Transform } = require('stream');

function filterByCountry(country) {
  return new Transform({
    objectMode: true, 
    transform(chunk, encoding, callback) {
      const data = JSON.parse(chunk); 
      if (data.country === country) {
        this.push(JSON.stringify(data) + '\n'); 
      }
      callback();
    }
  });
}

module.exports = { filterByCountry };