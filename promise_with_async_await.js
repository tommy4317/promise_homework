getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 10) + 1;
      resolve({ result: Math.random() });
      console.log(random);
    }, 500);
  });
};
async function getNumber() {
  let wait = await getRandomNumber();
  return wait;
}

getNumber();
