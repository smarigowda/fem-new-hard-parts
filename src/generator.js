function * createFlow() {
  yield 4;
  console.log('inside generator');
  yield 5;
  yield 6;
  yield 7;
}


const returnNextElement = createFlow();

const element1 = returnNextElement.next();
console.log(element1);
const element2 = returnNextElement.next();
console.log(element2);
const element3 = returnNextElement.next();
console.log(element3);
const element4 = returnNextElement.next();
console.log(element4);
