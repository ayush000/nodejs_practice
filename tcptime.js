/**
 * Created by socomo14 on 9/29/15.
 */
var net=require('net');
//var sock=process.argv[2];
var date=new Date();
var server=net.createServer(function(socket)
{
    //socket.write(typeof date.getDate()+"");
    //socket.write(typeof date.getDate());
    //socket.write(date.getFullYear()+"-"+toStd(date.getMonth())+"-"+toStd(date.getDate())+" "+toStd(date.getHours())+":"+toStd(date.getMinutes()));
    socket.write(date.getFullYear()+"-"+("0"+(date.getMonth()+1)).slice(-2)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes());
    socket.end();
});
server.listen(parseInt(process.argv[2]));

var toStd=function(dat)
{
    if(dat<10)
    {
        return "0"+dat
    }
    return ""+dat;
};