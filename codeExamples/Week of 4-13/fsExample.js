const fs = require('fs');


fs.readdir('/Users/tunderockson/Desktop/Fall 2020/CMSC389N/cmsc389N-arockson/codeExamples/Week of 4-13', function (err, files){
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }


});


fs.appendFile('/Users/tunderockson/Desktop/Fall 2020/CMSC389N/cmsc389N-arockson/codeExamples/Week of 4-13/pthExample.js', '\nconsole.log(\'Yessirskiii!\');', function(err){
    if(err){
        console.log('File didn\'t work yo');
    }
    
});
