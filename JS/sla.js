function html()
{
	document.getElementById('html').style.display='block';
	document.getElementById('h1').style.display='block';
	document.getElementById('css').style.display="none";
	document.getElementById('js').style.display="none";
	document.body.style.background ="CYAN";
}
function css()
{
	document.getElementById('css').style.display="block";
	document.getElementById('html').style.display="none";
	document.getElementById('js').style.display="none";
	document.body.style.background ="RED";
}
function js()
{
	document.getElementById('js').style.display="block";
	document.getElementById('css').style.display="none";
	document.getElementById('html').style.display="none";
	document.body.style.background ="YELLOW";
}

function home()
{
	document.getElementById('js').style.display="none";
	document.getElementById('css').style.display="none";
	document.getElementById('html').style.display="none";
	document.body.style.background ="WHITE";
}
function contact()
{
	document.getElementById('js').style.display="none";
	document.getElementById('css').style.display="none";
	document.getElementById('html').style.display="none";
	document.body.style.background ="WHITE";
}
function about()
{
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
}
function h2()
{
	document.getElementById('h1').style.display="none";
	document.getElementById('h2').style.display="block";
	document.getElementById('h3').style.display="none";

}
function h3()
{
	document.getElementById('h1').style.display="none";
	document.getElementById('h2').style.display="none";
	document.getElementById('h3').style.display="block";
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
