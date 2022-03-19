function ballThrow(){
	const body=document.getElementsByTagName('body')[0];
	const ball=document.createElement('div');
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
	let i=0;
	let down=true;
	const throwing=setInterval(function(){
		ball.style.left=~~ball.style.left.slice(0,-2)+16;
		if(down){
			ball.style.top=~~ball.style.top.slice(0,-2)+3*i;
			i++;
		}
		else{
			ball.style.top=~~ball.style.top.slice(0,-2)-10-3*i;
			i--;
		}
		if(ball.style.top.slice(0,-2)>600){
			down=false;
		}
	},25);
	setTimeout(function(){
		clearInterval(throwing);
		ball.style.left=800;
		ball.style.top=100;
	},1000);
}
