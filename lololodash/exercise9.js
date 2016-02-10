var _ = require("lodash");

// To get started, use the template() function to interpolate
// a simple var for us:

//     { name: "Foo",
//       login: [ 1407574431, 140753421 ]
//     }

// We want a simple string greeting the user by name and showing the
// number of times the user has logged in (every timestamp represents
// one login). Your function should return a String like this:

//     Hello Foo (logins: 2)

var worker = function(data) {
    
    var template = 'Hello <%= name %> (logins: <%= logins %>)';
    var values = {
        name: data.name,
        logins: _.size(data.login)
    };
   
    return _.template(template)(values);
};

module.exports = worker;
