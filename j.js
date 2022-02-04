const body=document.getElementsByTagName('body')[0];
let table=document.createElement('table');
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
		td.style.textAlign='center';
		td.style.border='1px gold solid';
		td.style.
		tr.append(td);
	});
}
