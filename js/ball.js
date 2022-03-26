let theNum=null;
function ballThrow(){
	const body=document.getElementsByTagName('body')[0];

	// ball into the pocket
	const rand=Math.random();
	const deg=-137+rand*360+9.47368421053;
	const num=1+(rand*38|0);
	const deg2=-137+num*9.47368421053;

	theNum='3,24,36,13,1,00,27,10,25,29,12,8,19,31,18,6,21,33,16,4,23,35,14,2,0,28,9,26,30,11,7,20,32,17,5,22,34,15,'.split(',')[num];
	//console.log(num);
	//console.log(deg);
	//console.log(deg2);

	// define ball
	let ball=document.createElement('div');
	ball.id='ball';
	Object.assign(ball.style,{
		display: 'block',
		position: 'absolute',
		backgroundColor: 'gold',
		width: '20px',
		height: '20px',
		borderRadius: '20px',
		left: '170px',
		top: '470px',
		boxShadow: 'rgb(0 0 0) -3px -2px 6px 0px inset',
	});
	body.append(ball);

	// ball bouncing
	let i=0;
	let bouncing=0;
	const throwing=setInterval(function(){
		ball.style.left=~~ball.style.left.slice(0,-2)+16;
		ball.style.top=~~ball.style.top.slice(0,-2)+i*3;
		i++;
		if(ball.style.top.slice(0,-2)>600){
			i=-i*1.2;
			bouncing++;
		}
		if(bouncing===2){
			ball.style.top=-10;
			bouncing=3;
		}
	},25);

	// ball in spinner
	const outerBall=document.getElementById('outerBall');
	const outerBallKeyFrames=[
		{transform: 'rotate(223deg)'},
		{transform: 'rotate(-137deg)'},
	];
	setTimeout(function(){
		clearInterval(throwing);
		// ball outer in chakra
		outerBall.append(ball);
		outerBall.animate(outerBallKeyFrames,{
			direction: 'reverse',
			duration: 1e3,
			iterations: 2,
		});
		ball.style.top='0px';
		ball.style.left='160px';
		ball.style.transform='rotate(-223deg)';  // counter angle
	},1e3);
	setTimeout(function(){
		outerBall.animate(outerBallKeyFrames,{
			direction: 'reverse',
			duration: 2e3,
			iterations: 2,
		});
		ball.animate([
			{left: '160px'},
			{left: '150px'},
		],{
			duration: 4e3,
		});
	},1e3+2e3);
	setTimeout(function(){
		outerBall.animate(outerBallKeyFrames,{
			direction: 'reverse',
			duration: 4e3,
		});
		ball.animate([
			{left: '150px'},
			{left: '140px'},
		],{
			duration: 4e3,
		});
	},1e3+2e3+4e3);
	setTimeout(function(){
		outerBall.animate(outerBallKeyFrames,{
			direction: 'reverse',
			duration: 6e3,
		});
		ball.animate([
			{left: '140px'},
			{left: '120px'},
		],{
			duration: 6e3,
		});
	},1e3+2e3+4e3+4e3);
	setTimeout(function(){
		outerBall.animate([
			{transform: 'rotate('+deg+'deg)'},
			{transform: 'rotate(-137deg)'},
		],{
			direction: 'reverse',
			duration: 9800,
		});
		ball.animate([
			{left: '120px'},
			{left: '113px'},
		],{
			duration: 9800,
		});
	},1e3+2e3+4e3+4e3+6e3);
	setTimeout(function(){
		outerBall.animate([
			{transform: 'rotate('+deg2+'deg)'},
			{transform: 'rotate('+deg+'deg)'},
		],{
			direction: 'reverse',
			duration: 200,
		});
		ball.animate([
			{left: '113px'},
			{left: '104px'},
		],{
			duration: 200,
			easing: 'cubic-bezier(.81,1.79,.72,.67)',
		});
	},1e3+2e3+4e3+4e3+6e3+9800);
	setTimeout(function(){
		outerBall.style.transform='rotate('+deg2+'deg)';
		ball.style.left='104px';
		clearInterval(throwing);
	},1e3+2e3+4e3+4e3+6e3+10e3);

}

function ballRemove(){
	try{
	document.getElementById('ball').remove();
	}catch(e){}
}
