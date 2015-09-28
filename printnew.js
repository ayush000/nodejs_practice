/**
 * Created by socomo14 on 9/28/15.
 */
var i;
var fs=require('fs');
var sum=0;
var file=fs.readFileSync(process.argv[2]).toString();
//var file=fs.readFileSync("input1").toString();
for(i=0;i<file.length;i++)
{
    //console.log(file[i]);
    if(file[i]==='\n')
    {
        //console.log('aye')
        sum++;
    }
}
console.log(sum);