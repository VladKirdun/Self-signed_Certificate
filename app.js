var exp = require('./index.js');

// var a = exp.cert();

function callback(result) {
	console.log(result.optionsForCSR.organizationUnit);
}
// console.log(a);

exp.cert(callback);