const api = new Promise((resolve, reject) => {
  resolve(1)
});

const api2 = new Promise((resolve, reject) => {
  resolve(2)
});

const api3 = new Promise((resolve, reject) => {
  resolve(3)
});

const executioner = async () => {
  const result = await api;
  console.log('result:', result);
  const result2 = await api2;
  console.log('result2: ', result2);
  const result3 = await api3;
  console.log('result3: ', result3);
}

executioner();

