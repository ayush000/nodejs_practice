/**
 * Created by socomo14 on 9/28/15.
 */

//console.log(process.argv);
var i;
var sum=0;
for(i=2;i<process.argv.length;i++)
{
    sum+=Number(process.argv[i])
}
console.log(sum);