chakra();
function chakra(){
	// define parent div
	const body=document.getElementsByTagName('body')[0];
	const div=document.createElement('div');
	div.id='chakra';
	Object.assign(div.style,{
		position: 'absolute',
		width: 	'274.5px',
		height: '275.5px',
		left: '720px',
		top: '10px',
		backgroundColor: '#643c06',
		border: '0px solid gold',
		borderRadius: '200px',
		outlineStyle: 'solid',
		outlineColor: 'gold',
		outlineOffset: '-45px',
		outlineWidth: '45px',
		cursor: 'pointer',
	});

	/// define belt contains number display
	const numberBelt=document.createElement('div');
	numberBelt.id='numberBelt';
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
			clipPath: 'polygon(10% 100%, 0% 0%, 100% 0%, 90% 100%)',
		});
		numberBelt.append(span);
	});
	div.append(numberBelt);
	body.appendChild(div);
	//// positioning number displaies
	Array.from(document.querySelectorAll('div#chakra > #numberBelt > span')).forEach(function(span,i){
		const rad=(2*i*Math.PI)/38;
		span.style.transform=`
			rotate(${rad}rad)
			translateY(${Math.sin(rad)/2-125}px)
		`;
	});

	/// define belt contains number pocket for ball
	const numberPocket=document.createElement('div');
	numberPocket.id='numberPocket';
	let colorIndex2=true;
	'00,27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2,0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1'
	.split(',').forEach(function(num){
		const span=document.createElement('span');
		span.id='chakra_in_'+num;
		colorIndex2=!colorIndex2;
		backgroundColor=colorIndex2?'red':'black';
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
			clipPath: 'polygon(15% 100%, 5% 0%, 95% 0%, 85% 100%)',
			filter: 'brightness(.5)',
		});
		numberPocket.append(span);
	});
	div.append(numberPocket);
	body.appendChild(div);
	//// positioning number displaies
	Array.from(document.querySelectorAll('div#chakra > #numberPocket > span')).forEach(function(span,i){
		const rad=(2*i*Math.PI)/38;
		span.style.transform=`
			rotate(${rad}rad)
			translateY(${Math.sin(rad)/2-104}px)
		`;
	});
}

const spin=function(){
	const chakra=document.getElementById('chakra');
	if(chakra.getAnimations().length!==0){
		return;
	}
		chakra.animate([
		{ transform: 'rotate(360deg)' }
	], {
		duration: 1500,
		iterations: 100,
	});
}

const spinStart=function(){
	const chakra=document.getElementById('chakra');
	const duration=2e3;
	chakra.animate([
		{ transform: 'rotate(360deg)' }
	], {
		duration: duration,
		easing: 'ease-in',
	});
	setTimeout(function(){
		chakra.animate([
			{ transform: 'rotate(360deg)' }
		], {
			duration: 1500,
			iterations: 100,
		});
	},duration);
}

const spinStop=function(){
	const chakra=document.getElementById('chakra');
	chakra.getAnimations()[0].finish();
	chakra.animate([
		{ transform: 'rotate(360deg)' }
	], {
		duration: 5e3,
		easing: 'ease-out',
		iterations: 1,
	});
}
