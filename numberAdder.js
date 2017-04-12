(() => {
  let sampleArray = ['4916-2600-1804-0530', '4779-252088-3072', '4252-278093-7078', '4556-4242-9283-2260'];
  //Quick check to see if there are numbers added in the command line
  if(process.argv[2]) {
    sampleArray = [];
    let j = 2;
    while(process.argv[j]) {
      j++;
      (process.argv[j]) ? sampleArray.push(process.argv[j]) : 0;
    }
  }
  //The actual code that sorts the numbers
  let results = [0, sampleArray[0]];
  sampleArray.forEach( (elem, index) => {
    let cardSum = 0;
    let splitCardNumber = elem.split("");
    splitCardNumber.forEach((elem) => {
      if(!isNaN(elem)) {
        cardSum += parseInt(elem);
      }
    });
    if(cardSum >= results[0]) {
      results[0] = cardSum;
      results[1] = sampleArray[index];
    }
  });
  console.log(results[1]);
  return results[1];
})();