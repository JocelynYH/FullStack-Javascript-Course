// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test succeeding';

function testOne() {
  return testOneMessage;
}


// Test Two Restrictions: Do not change any code in the body of testTwo
let testTwoMessage = 'test failing';

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc() {
  testTwoMessage = 'test succeeding';
}


// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = 'test failing';

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = 'test succeeding';
  }

  let msg = getMessage();
  return msg;

  function getMessage(value) {
    if (!value) {
      return testThreeMessage;
    }

    return 'test failing';
  }
}


// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = 'test succeeding';

function testFour(msg) {
  function innerFunc(msg) {
    msg = msg

    function doubleInner(msg) {
      testFourMessag = msg;
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing')
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}

console.log(testOne());
// console.log(testTwo());
// console.log(testThree());
// console.log(testFour());

