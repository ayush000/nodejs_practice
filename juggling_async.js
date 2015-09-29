var http=require('http');

var get3=function()
{
    http.get(process.argv[4],function(response)
    {
        var out="";
        response.setEncoding('utf8');
        response.on('data',function(data)
        {
            out+=data;
        });
        response.on('end',function()
        {
            //console.log(out.length);
            console.log(out);
        });
    });
};

var get2=function()
{
    http.get(process.argv[3],function(response)
    {
        var out="";
        response.setEncoding('utf8');
        response.on('data',function(data)
        {
            out+=data;
        });
        response.on('end',function()
        {
            //console.log(out.length);
            console.log(out);
            get3()
        });
    });
};

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
        //console.log(out.length);
        console.log(out);
        get2()
    });
});