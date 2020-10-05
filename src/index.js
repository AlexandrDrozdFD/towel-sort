
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const newArr = [];

	if (matrix && matrix.length) {

		matrix.map((item, index) => {
			if (index % 2 !== 0) {
				return item.sort((a, b) => b - a);
			};
		});
		
		for (let i = 0; i <= matrix.length - 1; i++) {
			matrix[i].reduce((prevValue, item) => {
				prevValue.push(item);
				return prevValue;
			}, newArr);
		}
	}
	return newArr;
}
