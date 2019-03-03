var urls = ["https://a.ksd-i.com/a/2018-05-16/105536-613521.png" , "https://a.ksd-i.com/a/2018-11-26/111588-680412.png" , "https://channel-korea.com/wp-content/uploads/2017/10/twice-5.jpg"
            ,"http://officiallykmusic.com/wp-content/uploads/2017/06/twice-signal-1.jpg" , "https://i2.wp.com/wikifamouspeople.com/wp-content/uploads/2018/07/twice-band.jpg?w=600&ssl=1"]
var index =0;


function next_img(){
    x=document.getElementById("display");
    if(index < 4){
        index+=1;
    }
    else{
        index =0;
    }
    x.src = urls[index];
}

function prev_img(){
    x=document.getElementById("display");
    if(index >1){
        index-=1;
    }
    else{
        index =4;
    }
    x.src = urls[index];
}