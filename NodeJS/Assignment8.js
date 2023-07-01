const fs = require('fs');

// Read the customer.json file
fs.readFile('customer.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading customer.json file:', err);
    return;
  }

  // Parse the JSON data
  const customers = JSON.parse(data);

  // Iterate over each customer and display their details
  customers.forEach((customer) => {
    const name = customer.name;
    const address = customer.address;
    const phone = customer['phone no'];
    const creditRating = customer['credit-rating'];

    console.log('Customer Name:', name);
    console.log('Address:', address);
    console.log('Phone Number:', phone);
    console.log('Credit Rating:', creditRating);
    console.log();
  });
});
