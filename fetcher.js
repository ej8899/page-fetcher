//
// LHL - fetcher.js - reads URL of single page and saves to local index.html
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m02w5/activities/418?journey_step=34&workbook=8
// 2022-07-31
//

//
//  REQUIRES
//
// ! we must npm init and then npm install request to use HTTP TCP library:
const request = require('request');
const fs = require('fs'); // node FILE SERVICES

//
// main function fetcher();  -- input via argv no need to pass into function
//
const fetcher = function() {

  //
  // argv to read input
  //
  let inputWords = process.argv.slice(2);
  
  // todo need valid URL for input data
  // todo need filename for output data

  if(inputWords.length < 2) {
    console.log("ERROR: need input URL and output filename");
    console.log("EXAMPLE: node fetcher.js https://www.google.com/ myoutputfile.txt");
    console.log();
    return;
  }
  
  //
  // fetch URL data
  // todo what if bad return?  give user errors
  //
  
  // request('http://www.google.com', (error, response, body) => {
  request(inputWords[0], (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    if(response.statusCode === 200) {
      saveFile(inputWords[1],body);
    } else {
      console.log("ERROR FETCHING DATA: " + response.statusCode);
    }
  });
};


//
// saveFile(filename to save, content to save);
//
const saveFile = function(filename, content) {
  // save to local file
  // research: https://nodejs.dev/learn/writing-files-with-nodejs
  fs.writeFile('./test.txt', content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

  
  // what if existing file? Prompt to over write
  // we could try to write it first - or use our 'stats' call below:

  // expected visual ouput
  fs.stat('./test.txt', (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
  
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    stats.size; // 1024000 //= 1MB 
  });
  
  const size = content.length;
  console.log("SAVED TO: " + filename +" FILE SIZE: " + size);
}

console.clear();
fetcher();