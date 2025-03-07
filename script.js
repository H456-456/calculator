// калькулятор
//кнопки функций
const plys = document.getElementById('plys');
const minys = document.getElementById('minys');
const ymno = document.getElementById('ymno');
const delit = document.getElementById('delit');
const c = document.getElementById('c');
const del = document.getElementById('del');
const del2 = document.getElementById('del2');
const ravno = document.getElementById('ravno');
const opasity = document.getElementById('opasity');
const qx = document.getElementById('qx');
const qn = document.getElementById('qn');
const qy = document.getElementById('qy');
const qqq = document.getElementById('qqq');
const qix = document.getElementById('qix');
//кнопки  цифр
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
//дисплеи
const wind = document.getElementById('wind');
const wind1 = document.getElementById('wind1');
const wind0 = document.getElementById('wind0');
const osnova = document.getElementById('osnova');

//морской бой

// кнопки выбора мини приложений
var o = 0 // для кнопок выбора приложений
opasity.addEventListener('click', function (event) {
	if (o == 1) {
		osnova.style.top = '-800px';
		opasity.innerHTML = 'калькулятор⇩';
		o = 0;
	} else {
		osnova.style.top = '10px';
		opasity.innerHTML = 'калькулятор⇧';
		o = 1;
	}
});

