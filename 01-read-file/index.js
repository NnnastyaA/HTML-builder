let fs = require('fs');

reader = fs.createReadStream('text.txt'); 
reader.on('data', function (chunk) { 
    console.log(chunk.toString()); 
});