const body=document.getElementsByTagName('body')[0];
let table=document.createElement('table');
table.border=1;
table.style.borderCollapse='collapse';
table.style.borderColor='gold';
body.appendChild(table);

// positioning table
for (let i=0;i<3;i++){
	var numbers=[...new Array(12)].map((_,j)=>(j+1)*3-i);
	table.append(document.createElement('tr'));
	var tr=document.getElementsByTagName('tr')[i];
	numbers.forEach(e=>{
		let span=document.createElement('span');
		span.innerText=e;
		span.style.display='inline-block';
		span.style.transform='rotate(-90deg)';
		let td=document.createElement('td');
		td.append(span);
		td.setAttribute('value','_'+e);
		td.style.width=30;
		td.style.height=30;
		td.style.textAlign='center';
		td.style.boxSizing='border-box';
		td.style.margin=0;
		td.style.padding=0;
		tr.append(td);
	});
}

// coloring table
let colorIndex=true;
for (let i=1;i<37;i++){
	if(!(i===11||i===19||i===29)){
		colorIndex=!colorIndex;
	}
	var span=document.querySelector(`td[value=_${i}]`);
	span.style.backgroundColor=colorIndex?'black':'red';
	span.style.color='white';
	span.style.fontWeight='bold';
	//span.style.width=20;
	//span.style.height=20;
}
