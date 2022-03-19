text();
function text(){
	const body=document.getElementsByTagName('body')[0];
	const div=document.createElement('div');
	div.id='text';
	const hours=new Date().getHours();
	let initText;
	if(hours<4){
		initText='こんばんは。';
	}
	else if(hours<9){
		initText='おはようございます。';
	}
	else if(hours<17){
		initText='ごきげんよう。'
	}
	else{
		initText='こんばんは。';
	}
	div.innerText=initText+'私はディーラーの ダイアモンド・ジム。';
	Object.assign(div.style,{
		position: 'absolute',
		width: '800px',
		height: '200px',
		right: '0px',
		bottom: '0px',
		margin: '50px',
		padding: '50px',
		boxSizing: 'border-box',
		backgroundColor: '#0000003d',
	});
	body.append(div);
}

dealer();
function dealer(){
	const body=document.getElementsByTagName('body')[0];
	const div=document.createElement('div');
	div.id='dealer';
	Object.assign(div.style,{
		position: 'absolute',
		width: '200px',
		height: '200px',
		right: '800px',
		bottom: '0px',
		margin: '50px',
		padding: '50px',
		boxSizing: 'border-box',
	});
	const dealer=document.createElement('img');
	dealer.src='./images/jim.png';
	dealer.style.zoom=0.2;
	div.append(dealer);
	body.append(div);
}

function chat(s){
	const text=document.getElementById('text');
	text.innerText=s;
}

loop();
function loop(){
	var spining;
	setInterval(function(){
		const d=new Date();
		const sec=d.getSeconds();
		//console.log(sec);
		if(21<sec&&sec<39){
			spin();
		}
		switch(sec){
			case 5:
				chat('さあ、あなたのベットを置いてください。');
				break;
			case 18:
				spinStart();
				ballThrow();
				break;
			case 20:
				chat('ディーラーはボールをスピンします…');
					spining=setInterval(function(){
						const elms=document.querySelectorAll('td[value*="_"]');
						const elm=elms[Math.random()*38|0];
						elms.forEach(e=>e.classList.remove('chosen'));
						elm.classList.add('chosen');
					},1e2);
				break;
			case 28:
				chat('他にベットはよろしいです？');
				break;
			case 30:
				chat('オーケー、ノー・モア・ベット。');
				break;
			case 40:
				spinStop();
				break;
			case 45 :
				const elms=document.querySelectorAll('td[value*="_"]');
				const elm=elms[Math.random()*38|0];
				const num=elm.getAttribute('value').slice(1);
				clearInterval(spining);
				elms.forEach(e=>e.classList.remove('chosen'));
				chat('数字は '+num+' です！');
				for(let i=0;i<100;i++){
					setTimeout(function(){
						elm.classList.toggle('chosen');
					},100*i);
				}
				break;
		}
	},1e3);
}
