const body=document.getElementsByTagName('body')[0];
let table=document.createElement('table');
table.border=1;
table.style.borderCollapse='collapse';
table.style.borderColor='gold';
body.appendChild(table);

// create table


for (var i=0;i<3;i++){
	var numbers=[...new Array(12)].map((_,j)=>(j+1)*3-i);
	table.append(document.createElement('tr'));
	var tr=document.getElementsByTagName('tr')[i];
	numbers.forEach(e=>{
		let td=document.createElement('td');
		td.innerText=e;
		td.style.width=30;
		td.style.height=30;
		td.style.textAlign='center';
		td.style.boxSizing='border-box';
		td.style.margin=0;
		td.style.padding=0;
		tr.append(td);
	});
}
