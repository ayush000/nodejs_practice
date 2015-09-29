/**
 * Created by socomo14 on 9/29/15.
 */
    var fs=require('fs');
var http=require('http');
var server =  http.createServer(function(request,response)
{
    var stream=fs.createReadStream(process.argv[3]);
    stream.pipe(response);
    //response.on('data')
    //response.write(content);
    //response.end();
});
server.listen(process.argv[2]);