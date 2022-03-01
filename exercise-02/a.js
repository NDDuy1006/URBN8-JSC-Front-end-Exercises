const api = fun => {
  return fun(1)
};
const api2 = fun => {
  return fun(2)
};
const api3 = fun => {
  return fun(3)
};

api(function(result){
  console.log('result: ', result);
  api2(function(result2){
    console.log('result2: ', result2);
    api3(function(result3){
      console.log('result3: ', result3);
    });
  });
});