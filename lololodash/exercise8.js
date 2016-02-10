var _ = require("lodash");

// We have the income of a few freelancers in an Array of Objects:

//     [ { name: "mike",  income: 2563 },
//       { name: "kim",   income: 1587 },
//       { name: "liz",   income: 3541 },
//       { name: "tom",   income: 2475 },
//       { name: "bello", income: 987  },
//       { name: "frank", income: 2975 } ]

// Please write a function that:

//   * Calculates the average income across all of the freelancers.
//   * Puts the freelancers into two groups:

// underperform their income is less than or equal to the average income.
// overperform their income is greater than the average income.

//   * Sorts the freelancers within the two groups by their income with the lowest first.
//   * Returns an Object in the following form:  

//     {
//         "average": 167,
//         "underperform": [
//             { "name": "foobar", "income": 99 },
//             { "name": "dummy", "income": 100 }
//         ],
//         "overperform": [
//             { "name": "foo", "income": 302 }
//         ]
//     }

var worker = function(freelancers) {
   
   var totalIncomes = _.reduce(freelancers, function(totalAccum, freelancer) {
       return totalAccum += freelancer.income;
   }, 0)
   
   var result = {
       average: totalIncomes / _.size(freelancers)
   }
   
   result.underperform = _.chain(freelancers)
                          .filter(function(freelancer){
                                return freelancer.income <= result.average;
                          })
                          .sortBy('income');
   
   result.overperform = _.chain(freelancers)
                         .filter(function(freelancer){
                            return freelancer.income > result.average;
                         })
                         .sortBy('income');
   
   return result;

};

module.exports = worker;
