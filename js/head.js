head();
function head(){
	const head=document.getElementsByTagName('head')[0];
	let href;
	if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
		href='./images/favicon_white.ico';
	}
	else {
		href='./images/favicon_dark.ico';
	}
	const link=document.createElement('link');
	link.setAttribute('rel','icon');
	link.setAttribute('href',href);
	head.appendChild(link);

}
