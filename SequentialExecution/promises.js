const fs = require('fs');

function cleanUp(data) {
  let r = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== ' ') {
      let k = '';
      while (i < data.length && data[i] !== ' ') {
        k = k + data[i];
        i = i + 1;
      }
      r.push(k);
    }
  }
  let str = r.join(' ');
  return str.trim();
}

fs.readFile('a.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    function writeDataToB(Data) {
      return new Promise((resolve) => {
        fs.writeFile('b.txt', Data, 'utf-8', (err) => {
          if (err) {
            console.log(err.message);
          } else {
            resolve(Data);
          }
        });
      });
    }

    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    })
      .then(writeDataToB)
      .then((Data) => {
        Data = Data.trim();
        Data = cleanUp(Data);
        return new Promise((resolve) => {
          fs.writeFile('a.txt', Data, 'utf-8', (err) => {
            if (err) {
              console.log(err.message);
            } else {
              resolve();
            }
          });
        });
      })
      .then(() => {
        console.log('Data written to file successfully');
      });
  }
});
