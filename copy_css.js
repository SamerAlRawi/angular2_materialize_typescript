var fs = require("fs");

fs.createReadStream(__dirname +'/node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(fs.createWriteStream(__dirname+'/bootstrap.css'));

console.log("copied bootstrap.css");
