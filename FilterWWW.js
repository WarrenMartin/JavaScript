/*

we have an array that holds many web site names search for all the sites that begin with "www" and display the total
number of such site

*/

var websites = [
  "www.example.com",
  "www.google.com",
  "stackoverflow.com",
  "www.openai.com",
  "www.github.com",
  "www.yahoo.com"
];

var count = 0;

for (var i = 0; i < websites.length; i++) {
  if (websites[i].startsWith("www")) {
    count++;
  }
}

console.log("Total websites starting with 'www': " + count);
