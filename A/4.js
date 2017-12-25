var base64 = require("base-64");

module.exports = function(str){
	return base64.encode(str);
}