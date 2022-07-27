//définis les tailles des éléments de la page
			var largeur = (window.innerWidth);
			var hauteur = (window.innerHeight);
			var page = document.getElementById("page");
			var presentation = document.getElementById("presentation");
			var title = document.getElementById("title_one");
			var img = document.getElementById("image_pres");
			var para = document.getElementById("first_para");
			var foot = document.getElementById("foot");
			var para_foot = document.getElementById("foot_para");
			var barre = document.getElementById("barre");
			var face = document.getElementById("facebook");
			var face_b = document.getElementById("facebook_blue");
			var twit = document.getElementById("twitter");
			var twit_b = document.getElementById("twitter_blue")
			var yout = document.getElementById("youtube");
			var yout_r = document.getElementById("youtube_red");
			var list = document.getElementById("menu");
			var menu = document.getElementById("nav");
			
			title.style.marginLeft = ((largeur/2) - (title.offsetWidth)/2) + "px";
			presentation.style.height = (hauteur + "px");
			presentation.style.width = (largeur + "px");
			
			list.style.width = (largeur - 75 + "px"); 
			menu.style.width = page.offsetWidth + "px" ;
			page.style.height = (hauteur + "px");
			page.style.width = (largeur - 75 + "px"); 
			para.style.width = (page.offsetWidth/2 - 15)  + "px";
			para.style.height = (hauteur - title.offsetHeight - menu.offsetHeight) + "px";
			
			img.style.height = (page.offsetHeight - title.offsetHeight - menu.offsetHeight - 100)   + "px";
			img.style.width = (img.offsetHeight * (945/1630) + 100)  + "px";
			img.style.marginLeft = (largeur - 75)/8 + "px";
			img.style.marginRight = (largeur - 75)/8 + "px";
			
			
			foot.style.top = (page.offsetTop + page.offsetHeight) + "px";
			foot.style.height = ((hauteur/100)*10) + "px";
			foot.style.width = ((largeur - 15) + "px");
			para_foot.style.paddingTop = (foot.offsetHeight/2) - 8 + "px";
			
			
			
			barre.style.marginTop = (foot.offsetHeight/2) + "px";
			face.style.top = ((foot.offsetHeight/2) - (face.offsetHeight/2)) +"px"; 
			face_b.style.top = ((foot.offsetHeight/2) - (face_b.offsetHeight/2)) +"px"; 
			twit.style.top = ((foot.offsetHeight/2) - (twit.offsetHeight/2)) +"px";
			twit_b.style.top = ((foot.offsetHeight/2) - (twit_b.offsetHeight/2)) + "px";
			yout.style.top = ((foot.offsetHeight/2) - (yout.offsetHeight/2)) + "px";
			yout_r.style.top = ((foot.offsetHeight/2) - (yout.offsetHeight/2)) + "px";
			menu.style.height = ((hauteur/100)*7) + "px"; 
			list.style.paddingTop = (menu.offsetHeight/2) - 10 + "px";
			
if (largeur < 1430)
	barre.style.display = "none"
else
	barre.style.display = "block"
			
	function resize() {
//définis les tailles des éléments de la page
			var largeur = (window.innerWidth);
			var hauteur = (window.innerHeight);
			var page = document.getElementById("page");
			var presentation = document.getElementById("presentation");
			var title = document.getElementById("title_one");
			var img = document.getElementById("image_pres");
			var para = document.getElementById("first_para");
			var foot = document.getElementById("foot");
			var para_foot = document.getElementById("foot_para");
			var barre = document.getElementById("barre");
			var face = document.getElementById("facebook");
			var face_b = document.getElementById("facebook_blue");
			var twit = document.getElementById("twitter");
			var twit_b = document.getElementById("twitter_blue")
			var yout = document.getElementById("youtube");
			var yout_r = document.getElementById("youtube_red");
			var list = document.getElementById("menu");
			var menu = document.getElementById("nav");
			
			title.style.marginLeft = ((largeur/2) - (title.offsetWidth)/2) + "px";
			presentation.style.height = (hauteur + "px");
			presentation.style.width = (largeur + "px");
			
			list.style.width = (largeur - 75 + "px"); 
			menu.style.width = (largeur - 75 + "px");
			page.style.height = (hauteur + "px");
			page.style.width = (largeur - 75 + "px"); 
			para.style.width = (page.offsetWidth/2 - 15)  + "px";
			para.style.height = (hauteur - title.offsetHeight - menu.offsetHeight) + "px";
			
			
			img.style.height = (page.offsetHeight - title.offsetHeight - menu.offsetHeight - 100)   + "px";
			img.style.width = (img.offsetHeight * (945/1630) + 100)  + "px";
			img.style.marginLeft = (largeur - 75)/8 + "px";
			img.style.marginRight = (largeur - 75)/8 + "px";

			
			foot.style.top = (page.offsetTop + page.offsetHeight) + "px";
			foot.style.height = ((hauteur/100)*10) + "px";
			foot.style.width = ((largeur - 15) + "px");
			para_foot.style.paddingTop = (foot.offsetHeight/2) - 8 + "px";
			
			
			
			barre.style.marginTop = (foot.offsetHeight/2) + "px";
			face.style.top = ((foot.offsetHeight/2) - (face.offsetHeight/2)) +"px"; 
			face_b.style.top = ((foot.offsetHeight/2) - (face_b.offsetHeight/2)) +"px"; 
			twit.style.top = ((foot.offsetHeight/2) - (twit.offsetHeight/2)) +"px";
			twit_b.style.top = ((foot.offsetHeight/2) - (twit_b.offsetHeight/2)) + "px";
			yout.style.top = ((foot.offsetHeight/2) - (yout.offsetHeight/2)) + "px";
			yout_r.style.top = ((foot.offsetHeight/2) - (yout.offsetHeight/2)) + "px";
			menu.style.height = ((hauteur/100)*7) + "px"; 
			list.style.paddingTop = (menu.offsetHeight/2) - 10 + "px";
			
if (largeur < 1430)
	barre.style.display = "none"
else
	barre.style.display = "block"
			}
			
window.onresize = resize