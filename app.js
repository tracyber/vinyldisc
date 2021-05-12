window.onload = function(){
     document.getElementById("bgaudio").play(); 
}

document.getElementById("play").onclick=function() {mute()};
function mute()
{
    document.getElementById("bgaudio").muted=true;
    document.getElementById("play").style.display='none';
    document.getElementById("mute").style.display='block';
}

document.getElementById("mute").onclick=function() {play()};
function play()
{
    document.getElementById("bgaudio").muted=false;
    document.getElementById("play").style.display='block';
    document.getElementById("mute").style.display='none';
}