//
// LHL - fetcher.js - reads URL of single page and saves to local index.html
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m02w5/activities/418?journey_step=34&workbook=8
// 2022-07-31
//

//
//  REQUIRES
//
const fs = require('fs');


//
// main function fetcher();  -- input via argv no need to pass into function
//
const fetcher = function() {

  //
  // argv to read input
  //
  let inputWords = process.argv.slice(2);
  console.log(inputWords);

  // need valid URL for input data
  // need filename for output data


  // fetch URL data
  // what if bad return?  give user errors
  
  // save to local file
  // research: https://nodejs.dev/learn/writing-files-with-nodejs
  const content = "abcd jafjkldsj fdlksjflkdsjskl fjdlkjf lds;jfld; flkad;jfjdfljd lkdjfdlkjdlfkdjdlfjd ljlkjdfj";
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

    console.log("FILE SIZE: " + stats.size);
  });

};



fetcher();