const fs = require('fs');
const readline = require('readline');
 
let rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Hello, write something: ', (answer) => {
    fs.writeFile('02-write-file', answer, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    rl.close();
});

