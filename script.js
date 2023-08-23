function show(){
	document.querySelector('.hamburger').classList.toggle('open');
	document.querySelector('.navigation').classList.toggle('active');
	document.querySelectorAll('.item').forEach(n => n.addEventListener("click", ()=>{
		('.navigation').classList.remove('active');
		('.hamburger').classList.remove('open');
	}))
}
