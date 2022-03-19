table();

function table(){
	const width=25;
	const height=30;
	const innerSize=12;
	const outerSize=8;

	const body=document.getElementsByTagName('body')[0];
	const div=document.createElement('div');
	div.id='table';
	var table=document.createElement('table');
	table.border=1;
	Object.assign(table.style,{
		position: 'absolute',
		borderCollapse: 'collapse',
		borderColor: 'gold',
		backgroundColor: 'green',
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		cursor: 'pointer',
		left: width,
		width: 'max-content',
		height: 'max-content',
	});
	div.append(table);
	body.append(div);

	// inner bet
	for (let i=0;i<3;i++){
		var numbers=[...new Array(12)].map((_,j)=>(j+1)*3-i);
		table.append(document.createElement('tr'));
		var tr=document.getElementsByTagName('tr')[i];
		numbers.forEach(e=>{
			let span=document.createElement('span');
			span.innerText=e;
			Object.assign(span.style,{
				display: 'inline-block',
				transform: 'rotate(-90deg)',
			});
			let td=document.createElement('td');
			td.append(span);
			td.setAttribute('value','_'+e);
			Object.assign(td.style,{
				width: width,
				height: height,
				boxSizing: 'border-box',
				margin: '0px',
				padding: '0px',
			});
			tr.append(td);
		});
	}

	// coloring inner bet
	let colorIndex=true;
	for (let i=1;i<37;i++){
		if(!(i===11||i===19||i===29)){
			colorIndex=!colorIndex;
		}
		var span=document.querySelector(`td[value=_${i}]`);
		span.style.backgroundColor=colorIndex?'black':'red';
		span.style.fontSize=innerSize;
	}

	// outer bet area 1-12, 13-24, 25-36
	for (let i=0;i<3;i++){
		var td=document.createElement('td');
		td.setAttribute('colspan',4);
		td.style.textAlign='center';
		td.innerText=`${['1st','2nd','3rd'][i]} 12`;
		td.style.height=width;
		td.style.fontSize=outerSize;
		if (i===0) table.append(document.createElement('tr'));
		document.getElementsByTagName('tr')[3].append(td);
	}

	// outer bet area 1-18, 19-36
	var innerText=['1 TO 18','EVEN','RED','BLACK','ODD','19 TO 36'];
	for (let i=0;i<6;i++){
		var td=document.createElement('td');
		td.setAttribute('colspan',2);
		td.style.textAlign='center';
		td.innerText=innerText[i];
		td.style.height=width;
		td.style.fontSize=outerSize;
		if (i===0) table.append(document.createElement('tr'));
		document.getElementsByTagName('tr')[4].append(td);
	}

	// inner bet zero, double zero
	var table=document.createElement('table');
	table.border=1;
	Object.assign(table.style,{
		position: 'absolute',
		borderCollapse: 'collapse',
		borderColor: 'gold',
		backgroundColor: 'green',
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		cursor: 'pointer',
		left: 0,
		width: width+1,
		height: 'max-content',
	});
	for (let i=0;i<2;i++){
		var tr1=document.createElement('tr');
		var td1=document.createElement('td');
		var s=document.createElement('span');
		Object.assign(s.style,{
			display: 'inline-block',
			transform: 'rotate(-90deg)',
			backgroundColor: 'green',
			fontSize: innerSize,
		});
		s.innerText=[...new Array(2-i)].fill('0').join('');
		td1.append(s);
		td1.setAttribute('value','_'+(i===0?'00':'0'));
		tr1.append(td1);
		Object.assign(tr1.style,{
			height:height*1.5,
		});
		table.append(tr1);
	}
	div.append(table);
	Object.assign(div.style,{
		position: 'relative',
		left: '0px',
		top: '0px',
		fontFamily: 'Dancing Script',
		zoom: 2,
		userSelect: 'none',
	});
	body.append(div);

	// outer bet line
	var table=document.createElement('table');
	table.border=1;
	Object.assign(table.style,{
		position: 'absolute',
		borderCollapse: 'collapse',
		borderColor: 'gold',
		backgroundColor: 'green',
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		cursor: 'pointer',
		left: width*13,
		width: width+1,
		height: 'max-content',
	});
	for (let i=0;i<3;i++){
		var tr1=document.createElement('tr');
		var td1=document.createElement('td');
		var s=document.createElement('span');
		Object.assign(s.style,{
			display: 'inline-block',
			transform: 'rotate(-90deg)',
			backgroundColor: 'green',
			fontSize: outerSize,
		});
		s.innerText='2 TO 1';
		td1.append(s);
		tr1.append(td1);
		Object.assign(tr1.style,{
			height:height,
		});
		table.append(tr1);
	}
	div.append(table);
	Object.assign(div.style,{
		position: 'relative',
		left: '0px',
		top: '0px',
		fontFamily: 'Dancing Script',
		zoom: 2,
		userSelect: 'none',
	});
	body.append(div);

}
