window.addEventListener('scroll', function(){
		const header = document.querySelector('header');
		header.classList.toggle("sticky", window.scrollY > 0);
	});

let menu = document.querySelector('.menu-btn');
let manuActive = document.querySelector('.btn-menu-mobile');
let body = document.querySelector('body');
let themeSetting = document.querySelector('.themeSetting');
let themeSettingM = document.querySelector('.themeSettingM');
menu.onclick=function(){
	menu.classList.toggle('menu-btn-active');
	manuActive.classList.toggle('active');
	body.classList.toggle('lock');
};

themeSetting.onclick=function(){
	body.classList.toggle('lightTheme');
	themeSetting.classList.toggle('lightTheme');
};


themeSettingM.onclick=function(){
	body.classList.toggle('lightTheme');
	themeSettingM.classList.toggle('lightTheme');
};


// $(document).ready(function() {
// 	$('.map').hover(function() {
// 		$(".line_menu_her").css("left", "155px");
//     });
// });
