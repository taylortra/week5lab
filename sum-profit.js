const { Transform } = require('stream');

function sumProfit() {
  let totalProfit = 0;
  return new Transform({
    transform: function(chunk, enc, push){
        totalProfit += parseFloat(JSON.parse(chunk)['profit']);
        push(null);
    },
    flush: function(push){
        push(null, '$' + totalProfit.toLocaleString());
    }
  })
}

  
module.exports = { sumProfit };