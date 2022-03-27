chakraRender();
function chakraRender(){
	// define parent div
	const body=document.getElementsByTagName('body')[0];
	// defined rolling div
	const chakra=document.createElement('div');
	chakra.id='chakra';
	Object.assign(chakra.style,{
		position: 'absolute',
		width: 	'275px',
		height: '276px',
		left: '30px',
		top: '30px',
		userSelect: 'none',
	});

	/// define belt contains number display
	const numberBelt=document.createElement('div');
	numberBelt.id='numberBelt';
	let colorIndex=true;
	'00,27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2,0,28,9,26,30,11,7,20,32,17,5,22,34,15,3,24,36,13,1'
	.split(',').forEach(function(num){
		const span=document.createElement('span');
		span.id='chakra_'+num;
		span.style.display='table';
		span.innerText=num;
		colorIndex=!colorIndex;
		backgroundColor=colorIndex?'red':'black';
		if(num==='0'||num==='00'){
			backgroundColor='green';
		}
		Object.assign(span.style,{
			display: 'table-cell',
			position: 'absolute',
			backgroundColor: backgroundColor,
			color: 'white',
			width: 20,
			height: 20,
			left: 128,
			top: 128,
			fontWeight: 'bold',
			textAlign: 'center',
			clipPath: 'polygon(10% 100%, 0% 0%, 100% 0%, 90% 100%)',
		});
		numberBelt.append(span);
	});
	chakra.append(numberBelt);
	//// positioning number displaies
	numberBelt.querySelectorAll('span').forEach(function(span,i){
		const rad=(2*i*Math.PI)/38;
		span.style.transform=`
			rotate(${rad}rad)
			translateY(${Math.sin(rad)/2-125}px)
		`;
	});

	/// define belt contains number pocket for ball
	const numberPocket=numberBelt.cloneNode(true);
	numberPocket.id='numberPocket';
	//// positioning number displaies
	numberPocket.querySelectorAll('span').forEach(function(span,i){
		span.id=span.id.replace('_','__');
		span.innerText='';
		const rad=(2*i*Math.PI)/38;
		Object.assign(span.style,{
			transform:`
				rotate(${rad}rad)
				translateY(${Math.sin(rad)/2-104}px)
			`,
			clipPath: 'polygon(15% 100%, 5% 0%, 95% 0%, 85% 100%)',
			filter: 'brightness(.5)',
		});
	});
	Object.assign(numberBelt.style,{
		boxSizing: 'border-box',
		width: '100%',
		height: '100%',
		borderRadius: '100%'
	});
	numberBelt.after(numberPocket);

	/// define nipples on chakra
	[0,45,90,135,180,225,270,315].forEach(function(deg){
		const nipple=document.createElement('div');
		nipple.className='nipple';
		Object.assign(nipple.style,{
			position: 'absolute',
			display: 'inline-block',
			left: 'calc(50% - 30px)',
			top: 'calc(50% - 30px)',
			width: '40px',
			height: '40px',
			border: '10px solid white',
			backgroundColor: 'silver',
			transform: `
				rotate(${deg}deg)
				translateY(150px)
				rotate(${deg%90===0?45:-45}deg)
				skew(30deg, 30deg)
				scale(0.1)
			`,
		});
		chakra.append(nipple);
	});

	// define handle
	[...new Array(38)].map((_,i)=>360/38*i+(360/38/2)).forEach(function(deg){
		const handle=document.createElement('div');
		handle.className='handle';
		handle.innerHTML=`<hr style="
			margin-top: 5px;
			opacity: .25;
		">`;
		Object.assign(handle.style,{
				position: 'absolute',
				display: 'inline-block',
				left: 'calc(50% - 30px)',
				top: 'calc(50% - 5px)',
				width: '60px',
				height: '10px',
				transform: `
					rotate(${deg}deg)
					translateY(60px)
					rotate(90deg)
				`,
				//background: 'linear-gradient(0.25turn, rgb(231 222 26), rgb(255 255 255), rgb(255 254 20))',
		});
		chakra.append(handle);
	});

	/// define outer ball
	const outerBall=document.createElement('div');
	outerBall.id='outerBall';

	Object.assign(outerBall.style,{
		display: 'block',
		position: 'relative',
		width: '20px',
		height: '20px',
		left: 'calc(50% - 10px)',
		top: 'calc(-50% - 10px)',
		transform: 'rotate(225deg)',
	});
	chakra.append(outerBall);

	/// append
	body.appendChild(chakra);

	// defined not rolling div
	const area=document.createElement('div');
	area.id='area';
	Object.assign(area.style,{
		position: 'absolute',
		width: 	'275px',
		height: '276px',
		left: '750px',
		top: '40px',
		boxSizing: 'border-box',
		userSelect: 'none',
		border: '46px solid silver',
		borderRadius: '100%',
		zIndex: -1,
		background: 'conic-gradient(#ffffab, #a9900b, #ffffab)',
		outline: '40px solid #643c06',
		outlineOffset: '-1px',
		transform: 'rotate(-45deg)',
	});

	body.appendChild(area);

	// outer chakra define
	chakra.outerHTML=`
		<div id="outerChakra">
			${document.getElementById('chakra').outerHTML}
		</div>
	`;

	Object.assign(document.getElementById('outerChakra').style,{
		position: 'absolute',
		display: 'inline-block',
		width: '336px',
		height: '336px',
		left: '720px',
		top: '10px',
		overflow: 'hidden',
	});

}

const spinStart=function(){
	const chakra=document.getElementById('chakra');
	const duration=2e3;
	const rot={ transform: 'rotate(360deg)' };
	const opt={
		duration: duration,
		easing: 'ease-in',
	};
	chakra.animate([rot],opt);
	const ite=10, dur=1500;
	setTimeout(function(){
		const opt1={
			duration: dur,
			iterations: ite,
		};
		chakra.animate([rot],opt1);
	},duration);
	setTimeout(function(){
		chakra.animate([rot],{duration:2000});
	},duration+dur*ite);
	setTimeout(function(){
		chakra.animate([rot],{duration:3000});
	},duration+dur*ite+2e3);
	setTimeout(function(){
		chakra.animate([rot],{duration:8000, easing:'ease-out'});
	},duration+dur*ite+2e3+3e3);
}
