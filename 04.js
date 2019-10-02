


const fs = require('fs')
function csvJSON(csv){

    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
  
    }
    return JSON.stringify(result);
  }

    var text = fs.readFileSync('data.csv','utf8')
    var toJSON = JSON.parse(csvJSON(text))

    toJSON.sort(function(a, b){
        return a.price - b.price;
    });
  console.log (toJSON)