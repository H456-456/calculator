/*кнопки функций*/
const plys = document.getElementById('plys');
const minys = document.getElementById('minys');
const ymno = document.getElementById('ymno');
const delit = document.getElementById('delit');
const c = document.getElementById('c');
const del = document.getElementById('del');
const del2 = document.getElementById('del2');
const ravno = document.getElementById('ravno');
/*кнопки  цифр*/
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const q6 = document.getElementById('q6');
const q7 = document.getElementById('q7');
const q8 = document.getElementById('q8');
const q9 = document.getElementById('q9');
const qq = document.getElementById('qq')
const q0 = document.getElementById('q0');
const q00 = document.getElementById('q00');
/*дисплеи*/
const wind = document.getElementById('wind');
const wind1 = document.getElementById('wind1');
/*переменные*/
var x = 0;
var y = " ";
var z = 0;/*+(1) -(2) *(3) /(4) */
/*функции цифр*/
q1.addEventListener('click', function() {
  y += 1;
  wind1.innerHTML = y;
});

q2.addEventListener('click', function () {
	y += 2;  
	wind1.innerHTML = y;
});

q3.addEventListener('click', function () {
	y += 3;
	wind1.innerHTML = y;
});

q4.addEventListener('click', function () {
	y += 4;
	wind1.innerHTML = y;
});

q5.addEventListener('click', function () {
	y += 5;
	wind1.innerHTML = y;
});

q6.addEventListener('click', function () {
	y += 6;
	wind1.innerHTML = y;
});

q7.addEventListener('click', function () {
	y += 7;
	wind1.innerHTML = y;
});

q8.addEventListener('click', function () {
	y += 8;
	wind1.innerHTML = y;
});

q9.addEventListener('click', function () {
	y += 9;
	wind1.innerHTML = y;
});

qq.addEventListener('click', function () {
	var w = ".";
	var ww = y.includes(w);
	if(ww == false){
		switch (y) {
			case "":
				y +="0.";
				wind1.innerHTML = y;
				break;
			case " ":
				y += '0.';
				wind1.innerHTML = y;
				break;
			default:
				y += "."
				wind1.innerHTML = y
				break;
		}
	}else{
		wind1.innerHTML = y
	}
});

q0.addEventListener('click', function () {
	y += 0;
	wind1.innerHTML = y;
});

q00.addEventListener('click', function () {
	y += "00";
	wind1.innerHTML = y;
});
/*функции кнопок управления */
c.addEventListener('click', function () {
  y = " ";
	x = 0;
	wind.innerHTML = x;
  wind1.innerHTML = x;
});

del.addEventListener('click', function () {
  const yy = y.slice(0, -1);
  y = yy;
	wind1.innerHTML = y
	switch (y) {
		case '':
			wind1.innerHTML = 0;
			break
		case ' ':
			wind1.innerHTML = 0;
			break
		default:
			break
	}
});

del2.addEventListener('click', function () {
  y = " ";
	wind1.innerHTML = 0;
});

/* кнопки + - * / */
plys.addEventListener('click', function () {
	let yy = Number(y)
	if (x == 0) {
		x += yy
		z = 1
		wind.innerHTML = x + '+'
	}else{
		z = 1
		wind.innerHTML = x + '+'
	}
	y = " ";
	wind1.innerHTML = 0;
});

minys.addEventListener('click', function () {
	let yy = Number(y);
	if (x == 0) {
		x -= yy
		z = 2
		wind.innerHTML = x + '-'
	} else {
		z = 2
		wind.innerHTML = x + '-'
	}
	y = " ";
	wind1.innerHTML = 0;
});

ymno.addEventListener('click', function () {
	let yy = Number(y)
	if (x == 0) {
		x *= yy
		z = 3
		wind.innerHTML = x + '*'
	} else {
		z = 3
		wind.innerHTML = x + '*'
	}
	y = " ";
	wind1.innerHTML = 0;
});

delit.addEventListener('click', function () {
	let yy = Number(y)
	if (x == 0) {
		x /= yy
		z = 4
		wind.innerHTML = x + '/'
	} else {
		z = 4
		wind.innerHTML = x + '/'
	}
	y = " ";
	wind1.innerHTML = 0;
});

ravno.addEventListener('click', function () {
	let yy = Number(y);
	switch (z) {
		case 1:
			x += yy;
			wind.innerHTML = x;
			break;
		case 2:
			x -= yy;
			wind.innerHTML = x;
			break;
		case 3:
			x *= yy;
			wind.innerHTML = x;
			break;
		case 4:
			x /= yy;
			wind.innerHTML = x;
			break;
		default:
			break;
	}
})
