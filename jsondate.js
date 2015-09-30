/**
 * Created by socomo14 on 9/30/15.
 */
var http=require('http');
var url=require('url');
var server=http.createServer(function(request,response)
{
    var reqUrl=url.parse(request.url,true);
    var queryString=reqUrl.query['iso'];
    //console.log("Url is "+reqUrl.toString());
    var output={};
    var date;
    if(queryString==undefined) {
        date = new Date();
    }
    else{
        date=new Date(queryString);
    }
    response.writeHead(200,{'Content-Type':'application/json'});
    if(reqUrl.pathname=='/api/parsetime')
    {

            output['hour']=date.getHours();
            output['minute']=date.getMinutes();
            output['second']=date.getSeconds();

            response.write(JSON.stringify(output))
            //response.write("abc")
            //response.end();
            //console.log(JSON.stringify(output))
        }
        //console.log(reqUrl.query['q']);
    else if(reqUrl.pathname=='/api/unixtime')
    {
        //do something
        output['unixtime']=date.getTime();
        response.write(JSON.stringify(output));
        //response.end();

    }
    else
    {
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 Not found");
        //response.end();
    }
    response.end();
    //console.log(reqUrl.pathname);
    //console.log();

});
server.listen(process.argv[2]);