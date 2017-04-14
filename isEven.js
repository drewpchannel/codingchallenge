function isEven (number) {
	if (number === 0) {
    console.log('true')
    return true;
  } else if (number === 1) {
    console.log('false')
    return false;
  } else {
    isEven(number - 2);
  }
}

console.log(isEven(876));