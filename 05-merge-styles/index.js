const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'styles');
const filePath =  path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(folderPath, {withFileTypes: true}, (err, buffers) => { 
    if (err) 
      console.log(err); 
    else { 
        let array = [];
        var itemsProcessed = 0;

        buffers.forEach(file => {
            if (file.isFile() && path.extname(file.name) == '.css') {
                const reader = fs.createReadStream(path.join(folderPath, file.name));
            
                reader.on('data', function (chunk) { 
                    itemsProcessed++; 
                    array.push(chunk.toString());

                    if(itemsProcessed === array.length) {
                        fs.writeFile(filePath, array.join(''), (err) => {
                            if (err) throw err;
                            console.log('The file has been saved!');
                        });
                    }
                });
            }
        }) 
    } 
  }); 