const fs = require("fs");

fs.writeFile("./txt.txt", "This was created using write-file-async.js", (err) => {
    console.log(err)
});