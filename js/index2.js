			$(document).ready(function () {
			'use strict';
			$(window).on('scroll', function () {
				var hauteur = (window.innerHeight);
				var largeur = (window.innerWidth);
				var add;
				if (hauteur > 950) {
					add = 0;
				}else if (hauteur > 800 && hauteur < 950){
					add = 0.1;
				}else if (hauteur > 600 && hauteur < 800){
					add = 0.7;
				}
				
				
				if ($(this).scrollTop() >= ($(window).height())*(1 + add)) {
					// $(window).height() représente un scroll de 100% (en hauteur)
					$('nav').addClass('navigation-fixed');
				} else {
					$('nav').removeClass('navigation-fixed');
				}

				});
			});