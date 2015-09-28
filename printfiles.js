/**
 * Created by socomo14 on 9/28/15.
 */
var fs=require('fs');
var i;
var path=process.argv[2];
var callback=function(err,list)
{
    var regex=new RegExp("\."+process.argv[3])
    for(i=0;i<list.length;i++)
    {
        if(regex.test(list[i]))
        {
            console.log(list[i])
        }
    }

    //console.log(/\.txt$/.test('abct.ttxt'));
};

fs.readdir(path,callback);
