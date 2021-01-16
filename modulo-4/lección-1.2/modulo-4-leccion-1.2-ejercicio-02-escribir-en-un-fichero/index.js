const fs = require("fs");

const text = "Lorem ipsum";

// Object version
// const readFile = (fileName, callback) => {
//   fs.readFile(fileName, "utf8", (err, data) => {
//     if (err) {
//       console.log("Error:", err);
//     } else {
//       const jsonData = JSON.parse(data);
//       callback(jsonData);
//     }
//   });
// };

// const writeFile = (fileName, fileContent, callback) => {
//   fs.writeFile(fileName, fileContent, (err) => {
//     if (err) {
//       console.log("Error:", err);
//     } else {
//       callback();
//     }
//   });
// };

// readFile("./input.json", (fileContent) => {
//   writeFile("./output.txt", fileContent, () => {
//     console.log("The file has been copied!");
//   });
// });

// Text version
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
