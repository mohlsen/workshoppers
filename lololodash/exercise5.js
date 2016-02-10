var _ = require("lodash");

// We have a list of words that we want to modify.

//     ['Test', 'Hello', 'World', 'Node', 'JavaScript']

// We want to modify each word so that they are all appended with the word Chained, 
//  converted to uppercase, and sorted by alphabetical order. The result should look like this:  

//     ['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']

var worker = function(words) {
    
    return _.chain(words)
      .map(function(word) {
        return (word + 'chained').toUpperCase();
      })
      .sortBy()
      .value();   
};

module.exports = worker;