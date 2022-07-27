var largeur = (window.innerWidth);
var hauteur = (window.innerHeight);
var title = document.getElementById("title");
var page = document.getElementById("page");
var list = document.getElementById("menu");
var menu = document.getElementById("nav");
var foot = document.getElementById("foot");
var para_foot = document.getElementById("foot_para");
var barre = document.getElementById("barre");
var face = document.getElementById("facebook");
var face_b = document.getElementById("facebook_blue");
var twit = document.getElementById("twitter");
var twit_b = document.getElementById("twitter_blue")
var yout = document.getElementById("youtube");
var yout_r = document.getElementById("youtube_red");
var gall = document.getElementById("gallery-box");

title.style.width = largeur - 20 + "px";
page.style.height = 1920 + "px";


menu.style.height = ((hauteur/100)*7) + "px"; 
menu.style.width = ((largeur - 15) + "px");
list.style.paddingTop = (menu.offsetHeight/2) - 10 + "px";


foot.style.top = gall.offsetHeight + title.offsetHeight + menu.offsetHeight +"px"
foot.style.height = ((hauteur/100)*10) + "px";
foot.style.width = ((largeur - 15) + "px");
para_foot.style.paddingTop = (foot.offsetHeight/2) - 8 + "px";
barre.style.marginTop = (foot.offsetHeight/2) + "px";
face.style.top = ((foot.offsetHeight/2) - (face.offsetHeight/2)) +"px"; 
face_b.style.top = ((foot.offsetHeight/2) - (face_b.offsetHeight/2)) +"px"; 
twit.style.top = ((foot.offsetHeight/2) - (twit.offsetHeight/2)) +"px";
twit_b.style.top = ((foot.offsetHeight/2) - (twit_b.offsetHeight/2)) + "px";
yout.style.top = ((foot.offsetHeight/2) - (yout.offsetHeight/2)) + "px";
yout_r.style.top = ((foot.offsetHeight/2) - (yout_r.offsetHeight/2)) + "px";

if (largeur < 1430)
	barre.style.display = "none"
else
	barre.style.display = "block"

function resize() {
var largeur = (window.innerWidth);
var hauteur = (window.innerHeight);
var title = document.getElementById("title");
var page = document.getElementById("page");
var list = document.getElementById("menu");
var menu = document.getElementById("nav");
var foot = document.getElementById("foot");
var para_foot = document.getElementById("foot_para");
var barre = document.getElementById("barre");
var face = document.getElementById("facebook");
var face_b = document.getElementById("facebook_blue");
var twit = document.getElementById("twitter");
var twit_b = document.getElementById("twitter_blue")
var yout = document.getElementById("youtube");
var yout_r = document.getElementById("youtube_red");

title.style.width = largeur - 20 + "px";
page.style.height = 2000 + "px";


menu.style.height = ((hauteur/100)*7) + "px"; 
menu.style.width = ((largeur - 15) + "px");
list.style.paddingTop = (menu.offsetHeight/2) - 10 + "px";


foot.style.top = gall.offsetHeight + title.offsetHeight + menu.offsetHeight +"px"
foot.style.height = ((hauteur/100)*10) + "px";
foot.style.width = ((largeur - 15) + "px");
para_foot.style.paddingTop = (foot.offsetHeight/2) - 8 + "px";
barre.style.marginTop = (foot.offsetHeight/2) + "px";
face.style.top = ((foot.offsetHeight/2) - (face.offsetHeight/2)) +"px"; 
face_b.style.top = ((foot.offsetHeight/2) - (face_b.offsetHeight/2)) +"px"; 
twit.style.top = ((foot.offsetHeight/2) - (twit.offsetHeight/2)) +"px";
twit_b.style.top = ((foot.offsetHeight/2) - (twit_b.offsetHeight/2)) + "px";
yout.style.top = ((foot.offsetHeight/2) - (yout.offsetHeight/2)) + "px";
yout_r.style.top = ((foot.offsetHeight/2) - (yout_r.offsetHeight/2)) + "px";

if (largeur < 1430)
	barre.style.display = "none"
else
	barre.style.display = "block"
}

window.onresize = resize