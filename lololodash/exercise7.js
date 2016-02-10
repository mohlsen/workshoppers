var _ = require("lodash");

// We have an Array recording orders made at a store.

//     [ { article: 1, quantity: 4 },
//       { article: 2, quantity: 2 },
//       { article: 1, quantity: 5 } ]

// As you can see in this example data, "1" was ordered twice. We want
// to know the total quantities ordered for each article.

// Please write a function that:

//   * Calculates the total number of orders for each article.
//   * Sorts the resulting array so that the articles with the highest number of orders are on top

//     [ { article: 1, total_orders: 9 },
//       { article: 2, total_orders: 2 } ]

var worker = function(orders) {
   
   
    return _.chain(orders)
            .reduce(function(totals, order) {
       
                var article = _.find(totals, {article: order.article});
                if (article) {
                    article.total_orders = article.total_orders + order.quantity;
                } else {
                    totals.push({article: order.article, total_orders: order.quantity});
                }
               
                return totals;

            }, [])
            .sortBy('total_orders')
            .reverse();

};

module.exports = worker;
