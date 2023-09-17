const {readFileSync} = require('fs');
let loaddata = () => JSON.parse(readFileSync('data.json'));

module.exports = {loaddata};