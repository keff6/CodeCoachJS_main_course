const fakeApiCall = (args) => {
  return new Promise((resolve) => {
    resolve({ data: args });
  });
};

const getDataPromiseChain = () => {
  const retVal = {};
  return fakeApiCall({ name: "Heather" }).then((res) => {
    retVal.name = res.data.name;

    return fakeApiCall({ job: "code monkey" }).then((res) => {
      retVal.job = res.data.job;

      return fakeApiCall({ age: 420 }).then((res) => {
        retVal.age = res.data.age;
        return retVal;
      });
    });
  });
};

const getData = async () => {
  // use the async/await pattern to refactor the code above and make the tests pass
  // you should return an object in the same shape as the `retVal` above
  const retVal = {};
  const res1 = await fakeApiCall({ name: "Heather" });
  retVal.name = res1.data.name;
  const res2 = await fakeApiCall({ job: "code monkey" });
  retVal.job = res2.data.job;
  const res3 = await fakeApiCall({ age: 420 });
  retVal.age = res3.data.age;
  return retVal;
};

const handleMultiplePromises = async (promises = []) => {
  // use promise.all to resolve multiple promises
  return Promise.all(promises);
};

/**
 * Implement Promise.all
 * @param {Array} promises an array of promises
 * @returns {Array} an array of responses returned from a set of promises
 */
const myPromiseAll = async (promises = []) => {
  // DO NOT use Promise.all

  const retVal = [];
  for (const promise of promises) {
    const res = await promise;
    retVal.push(res);
  }
  return retVal;
};
module.exports = {
  getDataPromiseChain,
  getData,
  handleMultiplePromises,
  fakeApiCall,
  myPromiseAll,
};
