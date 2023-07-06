const fs = require('fs')

function cleanUp(data) {
    let r = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] != " ") {
        let k = "";
        while (i < data.length && data[i] != " ") {
          k = k + data[i];
          i = i + 1;
        }
        r.push(k);
      }
    }
    let str = "";
    for (let word of r) {
      str = str + word + " ";
    }
    str = str.trim();
    return str;
  }

fs.readFile("a.txt","utf-8",(err,data) => {
    if(err){
        console.log(err.message)
    }else{
        setTimeout(() => {
            fs.writeFile("b.txt",data,'utf-8',(err) => {
                if(err){
                    console.log(err.message)
                }else{
                    let Data = data.trim()
                    Data = cleanUp(Data)
                    fs.writeFile("a.txt", Data, "utf8", (error) => {
                        if (error) {
                          console.error("Error writing to file:", error);
                          return;
                        }
                        console.log("Data written to file successfully.");
                      });
                }
            })
        },3000)
    }
})