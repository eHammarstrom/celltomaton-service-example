function getRandBinary() {
	return Math.floor(Math.random() * 2);
}

function printRow(row) {
		let obj = $('<div class="row-style">');
		$('body').append(obj);
		for (j = 0; j < row.length; j++) {
			let state = 'off'

			if (row[j] == 1) state = 'on';

			$(obj).append('<div class="' + state + ' cell-style">');
			$(obj).append('</div>');
		}
		$('body').append('</div>');
}

function printPrettyCelltomaton(matrix) {
	let start = new Date();
	for (i = 0; i < matrix.length; i++) {
		printRow(matrix[i]);
	}
	console.log('time taken to printPretty:', new Date() - start);
}

let arr = [];

let postData = {
	Array: [],
	Height: 100,
	Rule: 45
};

for (i = 0; i < 100; i++) {
	arr[i] = getRandBinary();
}

postData.Array = arr;

$(document).ready(() => {
	$.ajax({
		url: 'http://95.85.41.186/',
		type: 'POST',
		data: JSON.stringify(postData),
		dataType: 'json',
		success: (data) => {
			printPrettyCelltomaton(data.Matrix);
		},
		error: (err) => {
			console.log('ERROR:\n', err);
		}
	});
});

