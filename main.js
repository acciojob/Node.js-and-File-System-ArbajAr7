const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
      } else {

        // Remove the word from the content
        const modifiedContent = data.split(word).join('');

        // Optionally, save the modified content back to the file
        fs.writeFile(filename, modifiedContent, (err) => {
          if (err) {
            console.error(`Error writing to file: ${err.message}`);
          } else {
            console.log(`Successfully removed "${word}" and saved the file.`);
            console.log('Modified content: '+ modifiedContent);
          }
        });
      }
    });
    rl.close();
  });
});
