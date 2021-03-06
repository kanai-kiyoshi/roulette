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
		left: '200px',
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
		left: '0px',
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
		switch(sec){
			case 5:
				ballRemove();
				chat('さあ、あなたのベットを置いてください。');
				break;
			case 18:
				spinStart();
				setTimeout(function(){
						ballThrow();
						chat('ディーラーはボールをスピンします…');
						spining=setInterval(function(){
								const elms=document.querySelectorAll('td[value*="_"]');
								const elm=elms[Math.random()*38|0];
								elms.forEach(e=>e.classList.remove('chosen'));
								elm.classList.add('chosen');
						},1e2);
				},2e3);
				break;
			case 28:
				chat('他にベットはよろしいです？');
				break;
			case 30:
				chat('オーケー、ノー・モア・ベット。');
				break;
			case 47 :
				clearInterval(spining);
				if(theNum){
					chat('数字は '+theNum+' です！');
				}
				else{
					console.log('theNum');
					console.log(theNum);
				}
				const elm=document.querySelector(`td[value="_${theNum}"]`);
				theNum=null;
				document.querySelectorAll(`td[value*="_"]`).forEach(e=>e.classList.remove('chosen'));
				let rouletteBlack=document.querySelectorAll('#numberPocket > span:nth-of-type(odd):not(#chakra__00)' );
				let odd00=document.getElementById('chakra__00');
				let rouletteRed=  document.querySelectorAll('#numberPocket > span:nth-of-type(even):not(#chakra__0)');
				let even0=document.getElementById('chakra__0');
				let rouletteNumBlack=document.querySelectorAll('#numberBelt > span:nth-of-type(odd):not(#chakra_00)' );
				let numOdd00=document.getElementById('chakra_00');
				let rouletteNumRed=  document.querySelectorAll('#numberBelt > span:nth-of-type(even):not(#chakra_0)');
				let numEven0=document.getElementById('chakra_0');
				if(elm){
					for(let i=0;i<184;i++){
						setTimeout(function(){
							elm.classList.toggle('chosen');
							rouletteBlack.forEach(function(e){
								e.style.backgroundColor=i%2===1?'black':'#ddd';
							});
							rouletteRed.forEach(function(e){
								e.style.filter=`brightness(${i%2===1?.8:.5})`;
							});
							rouletteNumBlack.forEach(function(e){
								e.style.backgroundColor=i%2===0?'black':'#666';
							});
							rouletteNumRed.forEach(function(e){
								e.style.backgroundColor=i%2===1?'red':'#f77';
							});
							if(i%2===1){
								odd00.style.filter='brightness(.5)';
								even0.style.filter='brightness(1.3)';
								numOdd00.style.backgroundColor='#0fff0f';
								numEven0.style.backgroundColor='green';
							}
							else{
								odd00.style.filter='brightness(1.3)';
								even0.style.filter='brightness(.5)';
								numOdd00.style.backgroundColor='green';
								numEven0.style.backgroundColor='#0fff0f';
							}
						},100*i);
						setTimeout(function(){
							rouletteRed.forEach(function(e){
								e.style.filter='brightness(.5)';
							});
							rouletteNumBlack.forEach(function(e){
								e.style.backgroundColor='black';
							});
							even0.style.filter='brightness(.5)';
							numOdd00.style.backgroundColor='green';
						},18500);
					}
				}
				break;
		}
	},1e3);
}
