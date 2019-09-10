function decimalToFraction(decimal){
	decimal = decimal.toString()
	let front;
	let zeros = (decimal.length - decimal.indexOf('.'))-1;
	let decimalDenom = Number(1+''.padEnd(zeros, 0));
	let divider= [];
	
	if(!decimal.includes('.')) return 'not a decimal';
	if (decimal.indexOf('.') != 1
		&& Number(decimal.charAt(0))!=0) {
		front = decimal.substring(0, decimal.indexOf('.'));
	}
	if(Number(front)===0 && front.includes('-')) front = '-';

	decimal = Number(decimal.substring(decimal.indexOf('.')+1))
	for (var i = 0; i < 1000; i++) {
		if (!(decimal%i || decimalDenom%i)) {
			divider.push(i);
		}
	}

	divider=divider[divider.length-1];
	decimal=(decimal/divider);
	decimalDenom=(decimalDenom/divider);

	if (front && front !== '-') {
		return `${front}+(${decimal}/${decimalDenom})`;
	}else if (front && front === '-'){
		return `${front}(${decimal}/${decimalDenom})`;
	}else{
		return `${decimal}/${decimalDenom}`;
	}
}