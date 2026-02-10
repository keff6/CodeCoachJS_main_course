/* 
    Write a function that returns a function that can only be called once
    e.g. const myFunc = once(() => {console.log('yo')})
    myFunc() -> 'yo'
    myFunc() -> undefined
    myFunc() -> undefined
*/

const once = (callback) => {
  let called = false

  return (...args) => {
    if(!called) {
      called = true
      return callback(...args)
    }
  }
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
  return (num) => initialNum + num
};

/* 
    Our person has some sensitive information exposed below
    make `accountBalance` and `bankInfo` private by leveraging closure scope
    for example: 
    personWithPrivateProperties().bankInfo.sensitiveId => undefined
    personWithPrivateProperties().accountBalance => undefined
*/

const personWithPrivateProperties = () => {
  const privateInfo = {
    accountBalance: -5,
    bankInfo: { name: "Bank of Venezuela", sensitiveId: "BV123" },
  }

  return {
    age: 10,
    job: "Pizza Driver",
    updateBank: (bankObj) => {
      privateInfo.bankInfo = bankObj
    },
    getBankInfo: () => {
      return privateInfo.bankInfo.name
    },
    getAccountBalance: () => {
      return privateInfo.accountBalance
    },
    updateAccountBalance: (val) => {
      privateInfo.accountBalance = privateInfo.accountBalance + val
    },
  };
};

module.exports = {
  once,
  addFactory,
  personWithPrivateProperties,
};
