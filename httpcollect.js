/**
 * Created by socomo14 on 9/29/15.
 */
var http=require('http');
http.get(process.argv[2],function(response)
{
    var out="";
    response.setEncoding('utf8');
    response.on('data',function(data)
    {
        out+=data;
    });
    response.on('end',function()
    {
        console.log(out.length);
        console.log(out);
    });
});