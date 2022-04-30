function getSum () {
	let result=0;

	for (let i = 0; i < arguments.length; i++) {
		if(!isNaN(+arguments[i])){
					result += +arguments[i];
  			}else{
			continue;
  			}
	}
	return result;
}

let sum = getSum(1, '1', '10', 'fuck');
console.log( sum ); // 12