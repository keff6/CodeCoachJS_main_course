/* 
    Write a function that returns a function that can only be called once
    e.g. const myFunc = once(() => {console.log('yo')})
    myFunc() -> 'yo'
    myFunc() -> undefined
    myFunc() -> undefined
*/

const once = (callback) => {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return callback(...args);
    }
  };
};

/* 
    Write a function that returns a function that take an initial number
    Subsequent calls will add that number to the new number
    e.g. const add2 = addFactory(2)
 
    add2(4) -> 6
    add2(7) -> 9
    add2(3) -> 5
*/

const addFactory = (initialNum) => {
  return (num) => {
    return initialNum + num;
  };
};

/* 
    Our person has some sensitive information exposed below
    make `accountBalance` and `bankInfo` private by leveraging closure scope
    for example: 
    personWithPrivateProperties().bankInfo.sensitiveId => undefined
    personWithPrivateProperties().accountBalance => undefined
*/

const personWithPrivateProperties = () => {
  let accountBalance = -5;
  const bankInfo = { name: "Bank of Venezuela", sensitiveId: "BV123" };
  return {
    age: 10,
    job: "Pizza Driver",
    updateBank: ({ name, sensitiveId }) => {
      //your code here
      bankInfo.name = name;
      bankInfo.sensitiveId = sensitiveId;
    },
    getBankInfo: () => {
      //your code here
      return bankInfo.name;
    },
    getAccountBalance: () => {
      //your code here
      return accountBalance;
    },
    updateAccountBalance: (amt) => {
      //your code here
      accountBalance += amt;
    },
  };
};

module.exports = {
  once,
  addFactory,
  personWithPrivateProperties,
};
