const fs = require('fs');
const fsProm = require('fs/promises');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

 fs.readdir(folderPath, {withFileTypes: true}, (err, buffers) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("\nCurrent directory filenames:"); 
      buffers.forEach(file => { 
        if (file.isFile()) {
            getFileSize(`${folderPath}/${file.name}`).then(fileSizeInBytes => {
                let newfile = file.name.replace('.', ' - ');
                console.log(`${newfile} - ${fileSizeInBytes}B`);
            });
        }
      }) 
    } 
  }); 


  async function getFileSize(filePath) {
    try {
      const stats = await fsProm.stat(filePath);
  
      return stats.size;
    } catch (err) {
      console.log(err.message);
    }
  }
  



