var _ = require("lodash");

// We have an array of comments from the website:

//     [
//         { username: "tim", comment: "you are doing a great job!" },
//         { username: "tim", comment: "when you have new workshoppers?" },
//         { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
//         { username: "max", comment: "where have you been on friday? we missed you!" },
//         { username: "max", comment: "You don't answer anymore - why?" },
//         { username: "cat_lover", comment: "MORE cats!!!" },
//         { username: "max", comment: "i really love your site" }
//     ]

// I want to know how to post the most comments without repeating the same user,
// so please write a function that:

//   * Counts the comments by `username`.
//   * Sorts the return array by the total comment count of each user.  

//     [ { username: "foo",    comment_count: 9 },
//       { username: "foobar", comment_count: 2 } ]

var worker = function(comments) {
    
    return _.chain(comments)
            .groupBy('username')
            .map(function(value, key) {
                return {
                    username: key,
                    comment_count: _.size(value)
                }
            })
            .sortBy('comment_count')
            .reverse();
            
            //original sort (no reverse):
            // .sortBy(function(item) {
            //     return -(item.comment_count);
            // });
};

module.exports = worker;
