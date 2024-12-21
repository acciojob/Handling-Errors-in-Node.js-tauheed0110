const fs = require('fs');

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents

  fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err){
      console.error(`Error reading file: ${err.message}`, filePath);
      return;
    }
    console.log(data.trim());
  })
}

// TODO: Call printFileContents with the command-line argument
const filePath = process.argv[2];

if(!filePath){
  console.log('Please provide a file path');
  process.exit(1);
}
printFileContents(filePath);
