const fs = require('fs')

function readDir(path) {
    return new Promise(function (resolve, reject) {
      fs.readdir(path, function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  (async () => {
    const names = await readDir('etch');
    console.log(names);
  })()