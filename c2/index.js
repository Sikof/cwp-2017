
// >
// <
// >=
//<=
// ==equal
// === absolute equality
// != neednakvo
// !== absolute unequal 

var kolichinaBrashno = 0.8;
var belobrashno = true;
var crnobrashno = true;
if(kolichinaBrashno > 1){
	console.log('kje pravime torta! :D');
}
else {
	console.log('Prvo kupi brashno, pa posle kje pravime');
}

if(belobrashno == true){
	console.log('Kje pravime so belo brashno!');
}else if (crnobrashno == true){
	console.log('kje pravime so crno brashno');
	}else{
		console.log('Nema da pravime..:(');
	}

var CasaZaMleko = 1;


if(CasaZaMleko > 1){
	console.log('pravime smoothy');

}else {
	console.log('make an ai with a sole purpose to clean dishes');

}




// + - / % *

console.log(2+2);
console.log(2 / 135);
console.log(4 - 12);
console.log(3 * 10);
console.log(95 % 4);
console.log(95 % 2);



var broj = 100;

if(broj % 2 == 0){
	console.log('paren');

}else{
	console.log('neparen')
}


var mesec = 31;


if(mesec % 2 ==0){
	console.log('ubav');
}else{
	console.log('neubav');
}


//&& i
// || ili


kolichinaBrashno = 0.7;
var brashno = true;

if(brashno == true && kolichinaBrashno >=1){
	console.log('Ima brasno i e vo dovolna kolicina');
}else {
	console.log('nema brashno, ili ne e vo dovolna kolicina');
}


broj = 7;
if(broj < 5 || broj > 10){
	console.log('broj e pomal od 5 ili pogolem od 10');
}else{
	console.log('brojot e vo opsegot od 5 do 10 vklucuvajki gi i 5 i 10');
}
// true && true = true
// true && false = false
// false && true = false
// false && false = false




// true || true = true
// true || false = true
// false || true = true
// false || false = false



mesec = 'Januari'

switch(mesec){
	case 'Dekemvri':
	console.log('Go odbravte mesecot Dekemvri');
	break;
	case 'Januari':
	console.log('Go odbravte mesecot Januari');
	break;
	case 'Februari':
	console.log('Go odbravte mesecot Februari');
	break;
	case 'Mart':
	console.log('Go odbravte mesecot Mart');
	break;
	case 'April':
	console.log('Go odbravte mesecot April');
	break;
	case 'Februari':
	console.log('Go odbravte mesecot Februari');
	break;
	case 'Februari':
	console.log('Go odbravte mesecot Februari');
	break;
	case 'Februari':
	console.log('Go odbravte mesecot Februari');
	break;
	case 'Movember':
	console.log('Go odbravte mesecot Movember');
	break;
	default:
	console.log('Ne postoi vakov mesec');
	break;
} 


mesec = 'Jri'
switch(mesec){
case 'Januari':
case 'Jri':
case 'Jsri':
case 'Jadri':
case 'Jari':
case 'Ji':
case 's':
		console.log('u chose wisley');
break;
case 'Janusadssadadsdasari':
case 'Jvcxvri':
case 'Jsraai':
case 'Jadasdasdri':
case 'Jaasdasdri':
case 'Jdsdi':
case 'sss':
break;
default:
		console.log('No');
break;
}


ime = 'Janko';
function zdravo(ime){
	console.log('Zdravo' + ime);
}


zdravo('Svet');



c2f(18); // X celziusovi stepeni vo farenhajtovi stepeni
f2c(120); // X farenhajtovi stepeni vo celziusovi stepeni

temp(12, 'c2f');// X celziusovi stepeni vo faenhajtovi
temp(102,'f2c');// X farenhajtovi stepeni vo celziusovi stepeni