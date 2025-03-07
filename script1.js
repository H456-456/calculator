// калькулятор

//переменные
var x = ' ' // первое число
var y = ' ' // второе число
var i = 0 // переменная для ответа калькулятора
var a = 1 // показывает программе какое поле ввода выбрано (х или у)
var z = 0 // показывает программе что выбрано (+ - * /) +(1) -(2) *(3) /(4)
//кнопки x y
qx.addEventListener('click', function () {
	a = 1
	wind.style.color = 'rgb(18, 33, 61)'
	wind0.style.color = 'rgb(22, 63, 141)'
})
qy.addEventListener('click', function () {
	a = 0
	wind0.style.color = 'rgb(18, 33, 61)'
	wind.style.color = 'rgb(22, 63, 141)'
})
//функции цифр
q1.addEventListener('click', function () {
	if (a == 1) {
		x += '1'
		wind.innerHTML = x
	} else {
		y += '1'
		wind0.innerHTML = y
	}
})

q2.addEventListener('click', function () {
	if (a == 1) {
		x += '2'
		wind.innerHTML = x
	} else {
		y += '2'
		wind0.innerHTML = y
	}
})

q3.addEventListener('click', function () {
	if (a == 1) {
		x += '3'
		wind.innerHTML = x
	} else {
		y += '3'
		wind0.innerHTML = y
	}
})

q4.addEventListener('click', function () {
	if (a == 1) {
		x += '4'
		wind.innerHTML = x
	} else {
		y += '4'
		wind0.innerHTML = y
	}
})

q5.addEventListener('click', function () {
	if (a == 1) {
		x += '5'
		wind.innerHTML = x
	} else {
		y += '5'
		wind0.innerHTML = y
	}
})

q6.addEventListener('click', function () {
	if (a == 1) {
		x += '6'
		wind.innerHTML = x
	} else {
		y += '6'
		wind0.innerHTML = y
	}
})

q7.addEventListener('click', function () {
	if (a == 1) {
		x += '7'
		wind.innerHTML = x
	} else {
		y += '7'
		wind0.innerHTML = y
	}
})

q8.addEventListener('click', function () {
	if (a == 1) {
		x += '8'
		wind.innerHTML = x
	} else {
		y += '8'
		wind0.innerHTML = y
	}
})

q9.addEventListener('click', function () {
	if (a == 1) {
		x += '9'
		wind.innerHTML = x
	} else {
		y += '9'
		wind0.innerHTML = y
	}
})

qq.addEventListener('click', function () {
	var w = '.'
	var ww = x.includes(w)
	var ee = y.includes(w)
	if (a == 1) {
		if (ww == false) {
			switch (x) {
				case '':
					x += '0.'
					wind.innerHTML = x
					break
				case ' ':
					x += '0.'
					wind.innerHTML = x
					break
				default:
					x += '.'
					wind.innerHTML = x
					break
			}
		} else {
			wind.innerHTML = x
		}
	} else {
		if (ee == false) {
			switch (y) {
				case '':
					y += '0.'
					wind0.innerHTML = y
					break
				case ' ':
					y += '0.'
					wind0.innerHTML = y
					break
				default:
					y += '.'
					wind0.innerHTML = y
					break
			}
		} else {
			wind0.innerHTML = y
		}
	}
})

q0.addEventListener('click', function () {
	if (a == 1) {
		x += '0'
		wind.innerHTML = x
	} else {
		y += '0'
		wind0.innerHTML = y
	}
})

q00.addEventListener('click', function () {
	if (a == 1) {
		x += '00'
		wind.innerHTML = x
	} else {
		y += '00'
		wind0.innerHTML = y
	}
})
//функции кнопок управления
c.addEventListener('click', function () {
	y = ' '
	x = ' '
	wind.innerHTML = 0
	wind0.innerHTML = 0
	wind1.innerHTML = 0
})

del.addEventListener('click', function () {
	if (a == 1) {
		const ww = x.slice(0, -1)
		x = ww
		switch (x) {
			case '':
				wind.innerHTML = 0
				break
			case ' ':
				wind.innerHTML = 0
				break
			default:
				wind.innerHTML = x
				break
		}
	} else {
		const yy = y.slice(0, -1)
		y = yy
		switch (y) {
			case '':
				wind0.innerHTML = 0
				break
			case ' ':
				wind0.innerHTML = 0
				break
			default:
				wind0.innerHTML = y
				break
		}
	}
})

del2.addEventListener('click', function () {
	if (a == 1) {
		x = ' '
		wind.innerHTML = 0
	} else {
		y = ' '
		wind0.innerHTML = 0
	}
})

ravno.addEventListener('click', function () {
	let yy = Number(y)
	let xx = Number(x)
	switch (z) {
		case 1:
			i = xx + yy
			wind1.innerHTML = i
			break
		case 2:
			i = xx - yy
			wind1.innerHTML = i
			break
		case 3:
			i = xx * yy
			wind1.innerHTML = i
			break
		case 4:
			i = xx / yy
			wind1.innerHTML = i
			break
		default:
			break
	}
})

qix.addEventListener('click', function (event) {
	x = String(i)
	wind.innerHTML = x
})

// кнопки + - * /
plys.addEventListener('click', function () {
	z = 1
	qn.innerHTML = '+'
})

minys.addEventListener('click', function () {
	z = 2
	qn.innerHTML = '-'
	qqq.style.top = '4'
})

ymno.addEventListener('click', function () {
	z = 3
	qn.innerHTML = '*'
})

delit.addEventListener('click', function () {
	z = 4
	qn.innerHTML = '/'
})