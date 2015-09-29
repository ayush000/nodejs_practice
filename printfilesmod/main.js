/**
 * Created by socomo14 on 9/28/15.
 */
var readnfilter=require('./readnfilter');
//var callback=function(err,data)
//{
//    if(err)
//    {
//        return ca
//    }
//};
var callback=function(err,list){
    list.forEach(function(file)
    {
        console.log(file);
    })
};
//console.log(process.argv[2]);
readnfilter(process.argv[2],process.argv[3],callback)