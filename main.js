const fs = require('fs');
const path = require('path');

// Function to read and print file contents
function readFile(filePath) {
  const absolutePath = path.resolve(filePath);

  // Check if the file exists and is readable
  fs.access(absolutePath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    if (err) {
      console.error("Error: Column '${columnName}' not found in the CSV.");
      return;
    }

    // Read the file contents
    fs.readFile(absolutePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
      }

      // Print file contents to the console
      console.log(data.trim());
    });
  });
}

// Retrieve the file path from command-line arguments
const filePath = process.argv[2];

// Check if a file path was provided
if (!filePath) {
  console.error('Error: Please provide a file path as a command-line argument.');
  process.exit(1);
}

// Call the readFile function with the provided file path
readFile(filePath);
// file changed
// once more