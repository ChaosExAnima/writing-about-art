function init() {
	var oId;
	for (i = 1; i < 5; i++) {
		oId = document.getElementById('m0' + i);
		oId.style.position = 'absolute';
		oId.style.left = '120px';
		oId.style.marginTop = '-3.3em';
		if (i == 3) {
			oId.style.marginTop = '-2.3em';
		}
	}
}

function show(id) {
	var oId = document.getElementById(id);
	oId.style.display = 'block';
}

function hide(id) {
	var oId = document.getElementById(id);
	oId.style.display = 'none';
}
