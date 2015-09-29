/**
 * Created by socomo14 on 9/29/15.
 */
var http=require('http');
http.get(process.argv[2],function(response)
{
    response.setEncoding('utf8');
    response.on("data",function(data)
    {
        console.log(data);
    })
});