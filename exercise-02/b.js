const api = new Promise(
  function (resolve, reject) {
    resolve();
    reject('Something went wrong');
  }
)

api.then(function () {
  return 1;
}).then(function (data) {
  console.log('result:', data);
  return 2;
}).then(function (data) {
  console.log('result2: ', data);
  return 3;
}).then(function (data) {
  console.log('result3: ', data);
}).catch(function (data) {
  console.log(reject);
})