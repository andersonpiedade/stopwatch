var hor = 0;
var min = 0;
var sec = 0;
var intervalo;

function twoDigits(Digits) {
	if (Digits < 10) {
		return ('0' + Digits)
	}else {
		return(Digits)
	}
}

function start() {
	 relogio()
	intervalo = setInterval(relogio,16)
}

function pause() {
	clearInterval(intervalo)
}

function stop() {
	clearInterval(intervalo)
	min = 0;
	sec = 0;
	hor = 0;
	document.getElementById('rel').innerText = '00:00:00';
}

function relogio() {
	sec++
	if (sec == 60) {
		min++
		sec = 0;
		if (min == 60) {
			hor++
			min = 0;
		}
	}
	document.getElementById('rel').innerText = twoDigits(hor)+':'+twoDigits(min)+':'+twoDigits(sec);
}