
var currentSlide = 0;

var timer = setInterval(slideshow, 5000);

var canSwitch = true;

function slideshow()
{
	
	
	
	var slides = document.getElementsByClassName("slide");
	
	if(currentSlide > slides.length || currentSlide < 0)
	{
		currentSlide = 0;
	}
	
	var nextSlide = currentSlide + 1;
	if(nextSlide>=slides.length)
	{
		nextSlide = 0;
	}
	
	slides[currentSlide].style.animation = "fade-out 3s forwards";
	slides[nextSlide].style.animation = "fade-in 3s forwards";
	
	var dots = document.getElementsByClassName("dot");
	dots[currentSlide].style.opacity = "0.5";
	dots[nextSlide].style.opacity = "1";
	
	
	currentSlide = nextSlide;
	
	canSwitch = false;
	setTimeout(function(){ canSwitch = true; }, 3000);
}

function switchToSlide(slide)
{
	if(currentSlide == slide || !canSwitch)
	{
		return;
	}

	var slides = document.getElementsByClassName("slide");
	if(currentSlide > slides.length || currentSlide < 0)
	{
		currentSlide = 0;
	}
	
	var nextSlide = slide;
	if(nextSlide>=slides.length)
	{
		nextSlide = 0;
	}
	
	slides[currentSlide].style.animation = "fade-out 3s forwards";
	slides[nextSlide].style.animation = "fade-in 3s forwards";
	
	var dots = document.getElementsByClassName("dot");
	dots[currentSlide].style.opacity = "0.5";
	dots[nextSlide].style.opacity = "1";
	
	currentSlide = nextSlide;
	clearInterval(timer);
	timer = setInterval(slideshow, 10000);
	
	canSwitch = false;
	setTimeout(function(){ canSwitch = true; }, 3000);
}

function openMenu()
{
	var menu = document.getElementsByClassName("navbar")[0];
	menu.style.animation = "menu-slide-in 0.5s forwards";
	showMenu();
}

function closeMenu()
{
	var menu = document.getElementsByClassName("navbar")[0];
	menu.style.animation = "menu-slide-out 0.5s forwards";

	menu.addEventListener("webkitAnimationEnd", onMenuAnimationFinish ,false);
	menu.addEventListener("animationend", onMenuAnimationFinish ,false);
	menu.addEventListener("oanimationend", onMenuAnimationFinish ,false);
}

function onMenuAnimationFinish()
{
	var menu = document.getElementsByClassName("navbar")[0];
	
	if(menu.style.animation == "menu-slide-in 0.5s forwards"){
	}
	
	else {
		hideMenu();
	}
}

function hideMenu()
{
	var menu = document.getElementsByClassName("navbar")[0];
	
	if(menu.style.animation == "menu-slide-in 0.5s forwards")
	{
		return;
	}
	
	menu.style.display = "none";
	
	var menubutton = document.getElementsByClassName("menubutton")[0];
	menubutton.style.display = "block";
	menubutton.style.animation = "fade-in 0.3s forwards";
}

function showMenu()
{
	var menu = document.getElementsByClassName("navbar")[0];
	menu.style.display = "block";
	
	var menubutton = document.getElementsByClassName("menubutton")[0];
	menubutton.style.display = "none";
	menubutton.style.animation = "";
}