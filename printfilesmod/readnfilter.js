/**
 * Created by socomo14 on 9/28/15.
 */
var fs=require('fs');
var path=require('path');

module.exports=function(dirname,ext,callback)
{
    //console.log(dirname);
    fs.readdir(dirname, function(err,list)
    {
        if(err)
        {
            //console.log("Error in callback");
            return callback(err);
        }
        else
        {
            var list1=[];
            list.forEach(function(file)
            {
                if(path.extname(file)==="."+ext)
                {
                    list1.push(file);
                }
            })
        }
        callback(null,list1);

    });

};