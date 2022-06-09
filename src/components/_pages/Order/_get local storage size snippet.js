// Run this in the browser console to find the size in KB of the objects inside localStorage

var _lsTotal = 0,
	_xLen,
	_x;
for (_x in localStorage) {
	if (!localStorage.hasOwnProperty(_x)) {
		continue;
	}
	_xLen = (localStorage[_x].length + _x.length) * 2;
	_lsTotal += _xLen;
	console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(3) + " KB");
}
console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

// Run this in the browser console to see the maximum size (in kb) allowed (in one item)

if (localStorage && !localStorage.getItem("size")) {
	var i = 0;
	try {
		// Test up to 10 MB
		for (i = 250; i <= 10000; i += 250) {
			localStorage.setItem("test2", new Array(i * 1024 + 1).join("a"));
		}
	} catch (e) {
		// to keep the string stored:
		localStorage.setItem(
			"test2",
			new Array((i - 250) * 1024 + 1).join("a")
		);
		// to remove the test data:
		// localStorage.removeItem('test');
		localStorage.setItem("size", i - 250);
	}
}

/* RESULTS: 

Testing the maximum size in one item: I get ~5000kb

Leaving the test string of ~5000kb, running again with a differently-named test string: I get 0kb for the second run

This means my browser maxes out at 5000kb TOTAL (per origin)


*/
