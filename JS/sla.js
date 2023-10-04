function html()
{
	document.getElementById('html').style.display='block';
	document.getElementById('h1').style.display='block';
	document.getElementById('css').style.display="none";
	document.getElementById('js').style.display="none";
	document.getElementById('home').style.display="none";
	document.body.style.background ="CYAN";
}
function css()
{
	document.getElementById('css').style.display="block";
	document.getElementById('html').style.display="none";
	document.getElementById('js').style.display="none";
	document.getElementById('home').style.display="none";
	document.body.style.background ="RED";
}
function js()
{
	document.getElementById('js').style.display="block";
	document.getElementById('css').style.display="none";
	document.getElementById('html').style.display="none";
	document.getElementById('home').style.display="none";
	document.body.style.background ="YELLOW";
}

function home()
{
	document.getElementById('home').style.display="block";
	document.getElementById('js').style.display="none";
	document.getElementById('css').style.display="none";
	document.getElementById('html').style.display="none";
	document.body.style.background ="WHITE";
}
function contact()
{
	document.getElementById('home').style.display="none";
	document.getElementById('js').style.display="none";
	document.getElementById('css').style.display="none";
	document.getElementById('html').style.display="none";
	document.body.style.background ="WHITE";
}
function about()
{
	document.getElementById('home').style.display="none";
	document.getElementById('js').style.display="none";
	document.getElementById('css').style.display="none";
	document.getElementById('html').style.display="none";
	document.body.style.background ="WHITE";

}
function h1()
{
	document.getElementById('h1').style.display="block";
	document.getElementById('h2').style.display="none";
	document.getElementById('h3').style.display="none";
	document.getElementById('home').style.display="none";
}
function h2()
{
	document.getElementById('h1').style.display="none";
	document.getElementById('h2').style.display="block";
	document.getElementById('h3').style.display="none";
	document.getElementById('home').style.display="none";

}
function h3()
{
	document.getElementById('h1').style.display="none";
	document.getElementById('h2').style.display="none";
	document.getElementById('h3').style.display="block";
	document.getElementById('home').style.display="none";
}
