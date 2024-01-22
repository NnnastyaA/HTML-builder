const fs = require('fs');
const readline = require('readline');
const path = require('path'); 

const filePath = path.join(__dirname, 'text.txt');
 
let rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Hello, write something: ', (answer) => {
    fs.writeFile(filePath, answer, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    rl.close();
});

