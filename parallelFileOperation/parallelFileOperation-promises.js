fs = require("fs");

const Executor1 = (resolve, reject) => {
  let Data = [];
  const readCallback = (err, data) => {
    if (err) {
      reject();
    }
    if (data) {
      Data.push(data);
      resolve(Data);
    }
  };
  fs.readFile("abc.txt", "utf-8", readCallback);
};

let q = new Promise(Executor1);

const Executor2 = (a) => {
  return new Promise((resolve, reject) => {
    let error = 1;
    const writeCallback = (err) => {
      if (err) {
        error = 0;
      }
      a.push(error);
      resolve(a);
    };
    fs.writeFile("b.txt", "Hi Frens", "utf-8", writeCallback);
  });
};

q.then(Executor2).then(console.log);
