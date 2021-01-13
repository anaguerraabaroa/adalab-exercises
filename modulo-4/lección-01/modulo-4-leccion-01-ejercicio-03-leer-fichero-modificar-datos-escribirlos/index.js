const fs = require("fs");

const handleReadInput = (err, fileContent) => {
  if (err != null) {
    console.log("Error:", err);
  } else {
    console.log(fileContent);
  }
};

fs.readFile("input-file.txt", "utf8", handleReadInput);

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error:", err);
    } else {
      const jsonData = JSON.parse(data);
      callback(jsonData);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

readFile("./input.json", (fileContent) => {
  const newFileContent = JSON.stringify(fileContent);
  writeFile("./output.txt", newFileContent, () => {
    console.log("The file has been copied!");
  });
});
