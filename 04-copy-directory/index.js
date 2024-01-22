const fs = require('fs');
const path = require('path');

const newFolderPath = path.join(__dirname, 'files-copy');
const folderPath = path.join(__dirname, 'files');

fs.access(newFolderPath, error => {
    if (!error) {
        fs.rmdir(newFolderPath, { recursive:true }, err => {
            if(err) throw err; // не удалось удалить папку
            console.log('Папка успешно удалена');

            createFolder();
        });
    } else {
        createFolder();
    }
});

function createFolder() {
    fs.mkdir(newFolderPath, err => {
        if(err) throw err; 
        console.log('Папка успешно создана');

        fs.readdir(folderPath, (err, files) => {
            if(err) throw err; 
            console.log('В папке находятся файлы:' + files);
            
            files.forEach(file => {
                fs.copyFile(path.join(folderPath, file), (path.join(newFolderPath, file)), err => {
                    if(err) throw err; 
                    console.log('Файл успешно скопирован');
                 });  
            });
        });
    });
}