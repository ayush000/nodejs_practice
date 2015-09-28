/**
 * Created by socomo14 on 9/28/15.
 */
//var i;
var fs=require('fs');
var sum=0;

//var file=fs.readFileSync("input1").toString();
var callback=function (err,data) {
    data=data.toString()
    if(err) return console.log(err);
    //console.log(data);
    lines=data.split('\n')
    console.log(lines.length-1);
};
fs.readFile(process.argv[2],callback);