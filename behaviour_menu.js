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