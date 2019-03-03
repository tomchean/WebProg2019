
/*
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpeg') {
      myImage.setAttribute ('src','images/2.jpeg');
    } else {
      myImage.setAttribute ('src','images/1.jpeg');
    }
}
*/

var title = document.querySelector('.image-viewer__title');
title.textContent = "Image Viewer";

var imgdis = document.getElementById("imgdis");
var imgs = [
    "https://lh5.googleusercontent.com/-5GTsECMarVU/V20Jkv0e8rI/AAAAAAABUh4/bvYllImdrcYrowcgy1Tz3RVAjhRN-QH1gCL0B/w500-h505-no/sg1_L.png",
    "https://lh3.googleusercontent.com/-JqZSYhcTi2g/V20JnvBYWaI/AAAAAAABUh4/XLaaoJlHZyYD_dAf2dajnIL2Lg_sRPgZwCL0B/w500-h505-no/sg6_L.png",
    "https://lh5.googleusercontent.com/-FSPE84oSuew/V20JnDmw3ZI/AAAAAAABUh4/IpGaAgOhhzc07uZI7QeohiJ1H0e1e1KMACL0B/w500-h505-no/sg5_L.png",
    "https://lh3.googleusercontent.com/-TdN0kgTCWok/V20Jm886fBI/AAAAAAABUh4/WG6ftvQMvYcEcTS-xty_c3jzkyzFG8ltwCL0B/w500-h505-no/sg4_L.png",
    "https://lh3.googleusercontent.com/-oE6pY8VLzNg/V20JkSN7dcI/AAAAAAABUh4/HLeKCJ2Zf7ApGG4TMS0aT98xCNiuxs9bQCL0B/w500-h505-no/sg15_L.png",
    "https://lh5.googleusercontent.com/-ord4l5MG0ws/V20JmHjDyeI/AAAAAAABUh4/a8w_Yxadq3Up_lgMJ6Nz-7CONFFwkY9eACL0B/w500-h505-no/sg2_L.png",
    "https://lh5.googleusercontent.com/-ldhb56gBuNQ/V20JmX1WxgI/AAAAAAABUh4/NJEjciQ8u-o3DVOKBsIJNSHTjW1Tsw_4wCL0B/w500-h505-no/sg3_L.png",
    "https://lh5.googleusercontent.com/-usOkjEY1UhA/V20JoaVvfSI/AAAAAAABUhQ/nWoACygBq5orSSfhi2Rq7cswz-iHKCtowCL0B/w500-h505-no/sg8_L.png",
    "https://lh5.googleusercontent.com/-FvUQbojrKtU/V20JoA-SBWI/AAAAAAABUh4/fdxXWQQ6KZkU5NuK0y9XewzYDZF4qalXgCL0B/w500-h505-no/sg7_L.png",
    "https://lh3.googleusercontent.com/-67RDtPNDJI0/V20JkHNCZtI/AAAAAAABUh4/S4-PrdnK3mgkrB41DcKmahI65bRXG3m8ACL0B/w500-h505-no/sg13_L.png",
    "https://lh3.googleusercontent.com/-5CN-vY8I-vM/V20JjvvNNXI/AAAAAAABUh4/74yMWjDyokIuTy73W8DGN8lcFMvfFDguQCL0B/w500-h505-no/sg11_L.png",
    "https://lh3.googleusercontent.com/-62GPqYfCmSE/V20JoiATRNI/AAAAAAABUhY/peYJA02u5yct1Sts0GNxWa9GjlCPn9fIgCL0B/w500-h505-no/sg9_L.png",
    "https://lh3.googleusercontent.com/-wy5Z5dUrTKA/V20Jj3IvklI/AAAAAAABUh4/7tjcowJY31c6qUx4reP9K6jAHHJ4K0QvgCL0B/w500-h505-no/sg12_L.png",
    "https://lh3.googleusercontent.com/-APiIKmQf_Ws/V20JkAxriqI/AAAAAAABUh4/k8Zhjr_l4c4J6vF89GoftdxOBp8rgLEmgCL0B/w500-h505-no/sg14_L.png",
    "https://lh3.googleusercontent.com/-AWg2T0OfIi8/V20JkjsknxI/AAAAAAABUh4/AEfxWoB54uImYvnS-4LaSlonLupxghGNgCL0B/w500-h505-no/sg16_L.png",
    ""
]
var imgidx = 0;
var back = document.getElementById("back");
back.className="disabled";
back.onclick = function(){
    if(imgidx>0){
        imgidx=imgidx-1;
        imgdis.setAttribute('src',imgs[imgidx]); 
    }
    if(imgidx === 0){
        back.className="disabled";
    }
    else if(imgidx===imgs.length-2){
        imgdis.setAttribute('style',""); 
        vedis.setAttribute('style',"display:none");
        next.className="";
    }
    
}
var next = document.getElementById("next");
var vedis = document.getElementById("videodis");
next.onclick = function(){
    if(imgidx<imgs.length-2){
        imgidx=imgidx+1;
        imgdis.setAttribute('src',imgs[imgidx]); 
    }
    else if(imgidx===imgs.length-2){
        imgidx=imgidx+1;
        imgdis.setAttribute('style',"display:none"); 
        vedis.setAttribute('style',"");
    }
    if(imgidx===imgs.length-1){
        next.className="disabled";
    }
    else if(imgidx===1){
        back.className="";
    }
}




/*
var button=document.querySelector('.image-viewer__button');
botton.src="images/back.png";


var display_image=document.querySelector('.image-viewer__display');
display_image.setAttribute('src','images/2.jpeg');
*/