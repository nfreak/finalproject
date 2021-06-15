var flag1=1;
var flag2=1;
var flag3=1;
var flag4=1;  
var zan = document.getElementById('zan');
var jin =document.getElementById('jin');
var cang =document.getElementById('cang');
var xiang =document.getElementById('xiang');
var num1 = document.getElementById('zann'); 
var num2 = document.getElementById('jinn'); 
var num3 = document.getElementById('cangg'); 
var num4 = document.getElementById('xiangg'); 
zan.onclick = function() { 
    img=document.getElementById('zan');
    if (flag1) { 
        img.src='images/video/点赞 (1).svg';
        num1.innerHTML++; 
        flag1--;
    } 
    else{
        img.src='images/video/点赞.svg';
        num1.innerHTML--; 
        flag1++;
    } 
}
jin.onclick = function() { 
    img=document.getElementById('jin');
    if (flag2) { 
        img.src='images/video/金币 (1).svg';
        num2.innerHTML++; 
        flag2--;
    } 
    else{
        img.src='images/video/金币.svg';
        num2.innerHTML--; 
        flag2++;
    } 
}
cang.onclick = function() { 
    img=document.getElementById('cang');
    if (flag3) { 
        img.src='images/video/收藏 (1).svg';
        num3.innerHTML++; 
        flag3--;
    } 
    else{
        img.src='images/video/收藏.svg';
        num3.innerHTML--; 
        flag3++;
    } 
}
xiang.onclick = function() { 
    img=document.getElementById('xiang');
    if (flag4) { 
        img.src='images/video/分享 (1).svg';
        num4.innerHTML++; 
        flag4--;
    } 
    else{
        img.src='images/video/分享.svg';
        num4.innerHTML--; 
        flag4++;
    } 
}


