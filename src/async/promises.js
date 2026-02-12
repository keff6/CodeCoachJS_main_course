const fakeApiCall = (args) => {
  return new Promise((resolve) => {
    resolve({ data: args });
  });
};

/**
 *
 * @returns {Promise} a promise that resolves to an object with the following shape:
 * {
 *  name: "Heather",
 * job: "code monkey",
 * age: 420,
 * }
 */
const getDataPromiseChain = () => {
  // TODO: this almost works but it's not quite right
  // what's wrong with this implementation?
  const retVal = {};
  return new Promise((resolve) => fakeApiCall({ name: "Heather" }).then((res) => {
    retVal.name = res.data.name;

    fakeApiCall({ job: "code monkey" }).then((res) => {
      retVal.job = res.data.job;

      fakeApiCall({ age: 420 }).then((res) => {
        retVal.age = res.data.age;
        resolve(retVal);
      });
    });
  })
);
};

const getData = async () => {
  // use the async/await pattern to refactor the code above and make the tests pass
  // you should return an object in the same shape as the `retVal` above

  const { data: name } = await fakeApiCall({ name: "Heather" })
  const { data: job } = await fakeApiCall({ job: "code monkey" })
  const { data: age } = await fakeApiCall({ age: 420 })

  return {
    ...name,
    ...job,
    ...age
  }
};

const handleMultiplePromises = async (promises = []) => {
  // use promise.all to resolve multiple promises
  return Promise.all(promises)
};

/**
 * Implement Promise.all
 * @param {Array} promises an array of promises
 * @returns {Array} an array of responses returned from a set of promises
 */
const myPromiseAll = async (promises = []) => {
  // DO NOT use Promise.all
  const results = []
  for(let promise of promises) {
    const res = await promise
    results.push(res)
  }
  return results
};

module.exports = {
  getDataPromiseChain,
  getData,
  handleMultiplePromises,
  fakeApiCall,
  myPromiseAll,
};
