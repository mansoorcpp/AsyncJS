fs = require("fs");
const parallelFileOperation = (filename, input) => {
  const readCallback = (err, data) => {
    const writeCallback = (err) => {
      if (err) {
        error = 0;
      }
      ans.push(error);
      console.log(ans);
    };
    ans = [];
    if (data) {
      ans.push(data);
    } else {
      throw err;
    }
    let error = 1;
    fs.writeFile("b.txt", input, "utf-8", writeCallback);
  };

  fs.readFile(filename, "utf-8", readCallback);
};

parallelFileOperation("abc.txt", "Worldboy");
