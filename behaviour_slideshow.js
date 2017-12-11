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