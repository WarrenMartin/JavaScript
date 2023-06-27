const fs = require('fs');

const names = ['John', 'Jane', 'Alice', 'Bob'];

const data = names.join('|');

fs.writeFile('names.txt', data, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  
  console.log('Names have been saved to names.txt');
});
