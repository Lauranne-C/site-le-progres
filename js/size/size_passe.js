var largeur = (window.innerWidth);
var hauteur = (window.innerHeight);
var article_1 = document.getElementById("article_1");
var article_2 = document.getElementById("article_2");
var article_3 = document.getElementById("article_3");
var article_4 = document.getElementById("article_4");
var article_5 = document.getElementById("article_5");
var article_6 = document.getElementById("article_6");
var img_2 = document.getElementById("image_a2");
var img_3 = document.getElementById("img_a3");
var img_4 = document.getElementById("img_a4");
var img_5 = document.getElementById("img_a5");
var img_6 = document.getElementById("img_a6");
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


img_2.style.width = ((article_2.offsetWidth/100)*80) + "px";
img_3.style.width = ((article_3.offsetWidth/100)*60) + "px";
img_4.style.width = ((article_4.offsetWidth/100)*50) + "px";
img_5.style.width = ((article_6.offsetWidth/100)*40) + "px";
img_6.style.width = ((article_6.offsetWidth/100)*40) + "px";


article_2.style.left = article_1.offsetWidth + 60 + "px";
article_3.style.top = article_1.offsetHeight + 250 + "px";
article_4.style.left = article_3.offsetWidth + 60 + "px";
article_4.style.top = article_2.offsetHeight + 250 + "px";
article_5.style.top = article_1.offsetHeight + article_3.offsetHeight + 300 + "px";
article_6.style.top = article_1.offsetHeight + article_3.offsetHeight + article_5.offsetHeight + 350 + "px";


title.style.width = largeur - 20 + "px";
page.style.height = article_1.offsetHeight + article_3.offsetHeight + article_5.offsetHeight + article_6.offsetHeight + 400 + "px";


menu.style.height = ((hauteur/100)*7) + "px"; 
menu.style.width = ((largeur - 15) + "px");
list.style.paddingTop = (menu.offsetHeight/2) - 10 + "px";


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
var article_1 = document.getElementById("article_1");
var article_2 = document.getElementById("article_2");
var article_3 = document.getElementById("article_3");
var article_4 = document.getElementById("article_4");
var article_5 = document.getElementById("article_5");
var article_6 = document.getElementById("article_6");
var img_2 = document.getElementById("image_a2");
var img_3 = document.getElementById("img_a3");
var img_4 = document.getElementById("img_a4");
var img_5 = document.getElementById("img_a5");
var img_6 = document.getElementById("img_a6");
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


img_2.style.width = ((article_2.offsetWidth/100)*80) + "px";
img_3.style.width = ((article_3.offsetWidth/100)*60) + "px";
img_4.style.width = ((article_4.offsetWidth/100)*50) + "px";
img_5.style.width = ((article_6.offsetWidth/100)*40) + "px";
img_6.style.width = ((article_6.offsetWidth/100)*40) + "px";


article_2.style.left = article_1.offsetWidth + 60 + "px";
article_3.style.top = article_1.offsetHeight + 250 + "px";
article_4.style.left = article_3.offsetWidth + 60 + "px";
article_4.style.top = article_2.offsetHeight + 250 + "px";
article_5.style.top = article_1.offsetHeight + article_3.offsetHeight + 300 + "px";
article_6.style.top = article_1.offsetHeight + article_3.offsetHeight + article_5.offsetHeight + 350 + "px";


title.style.width = largeur - 20 + "px";
page.style.height = article_1.offsetHeight + article_3.offsetHeight + article_5.offsetHeight + article_6.offsetHeight + 400 + "px";


menu.style.height = ((hauteur/100)*7) + "px"; 
menu.style.width = ((largeur - 15) + "px");
list.style.paddingTop = (menu.offsetHeight/2) - 10 + "px";


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

window.onresize = resize;