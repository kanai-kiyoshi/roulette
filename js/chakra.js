chakra();
function chakra(){
	const body=document.getElementsByTagName('body')[0];
	const div=document.createElement('div');
	div.id='chakra';
	Object.assign(div.style,{
		position: 'absolute',
		width: 	'275.5px',
		height: '275.5px',
		left: '720px',
		top: '10px',
		backgroundColor: '#643c06',
		border: '0px solid gold',
		borderRadius: '200px',
		outlineStyle: 'solid',
		outlineColor: 'gold',
		outlineOffset: '-25px',
		outlineWidth: '24px'
	});

	let colorIndex=true;
	'00,27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2,0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1'
	.split(',').forEach(function(num){
		const span=document.createElement('span');
		span.id='chakra_'+num;
		span.innerText=num;
		colorIndex=!colorIndex;
		backgroundColor=colorIndex?'red':'black';
		if(num==='0'||num==='00'){
			backgroundColor='green';
		}
		Object.assign(span.style,{
			display: 'inline-block',
			position: 'absolute',
			backgroundColor: backgroundColor,
			color: 'white',
			width: 20,
			height: 20,
			left: 128,
			top: 128,
			textAlign: 'center',
		});
		div.append(span);
	});

	body.appendChild(div);

	Array.from(document.querySelectorAll('div#chakra > span')).forEach(function(span,i){
		const rad=(2*i*Math.PI)/38;
		console.log(Math.sin(rad));
		span.style.transform=`
			rotate(${rad}rad)
			translateY(${Math.sin(rad)/2-125}px)
		`;
	});
}

const spin=function(){
	document.getElementById('chakra').animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
}
