var _ = require("lodash");

// We have an Array of items sold yesterday like this:

//     [{ article: 41,   quantity: 24 },
//      { article: 2323, quantity: 2  },
//      { article: 655,  quantity: 23 }]

// Please write a function that will sort these items by quantity from largest to smallest.

//   > 
//   > #### Hint
//   > 
//   > Because `sortBy` only sorts from smallest to largest you may need to use the callback function.

var worker = function(items) {
    
    return _.sortBy(items, function(item) {
        return -(item.quantity);
    });
      
      
};

module.exports = worker;