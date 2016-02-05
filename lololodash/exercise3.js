var _ = require("lodash");

// Please write a function that takes in a hashtable or associative array of
// European towns with their populations in millions:

//     { Hamburg:    { population: 1.698 },
//       Strasbourg: { population: 0.272 },
//       Rome:       { population: 2.753 },
//       Dublin:     { population: 0.528 } }

// We want a new size attribute added to every town where the value depends on
// the town's population, as follows:

//     { City1: {population: 1.58, size: 'big'  },
//       City2: {population: 0.58, size: 'med'  },
//       City3: {population: 0.28, size: 'small'} }

// Attention: the list could also be an Array, so you will have to use a
// collection function.

// Use the following guidelines:

//   * All cities having a population over 1 million are "big".
//   * Cities having a population less than 1 million but more than 0.5 million are "med".
//   * All cities having a population less than 0.5 million are "small".

//   > 
//   > #### Hint
//   > 
//   > Don't know where to start? Use `forEach` to iterate through the supplied data
//   > and use an `if-elseif-else` condition to add a size variable.

var worker = function(items) {
    
    return _.forEach(items, function(item) {
        item.size = item.population > 1 ? 'big' : item.population > .5 ? 'med' : 'small';
        return item
    });
};

module.exports = worker;