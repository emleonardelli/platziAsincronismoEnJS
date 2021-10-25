const somethingWillHappend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    }else{
      reject('LOL!');
    }
  });
};

somethingWillHappend()
  .then(response => console.log(response))
  .catch(err => console.log(err));

const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Hey!');
      }, 2000);
    }else {
      const error = new Error('LOL!');
      reject (error);
    }
  })
}

somethingWillHappend2()
  .then(response => console.log(response))
  .catch(err => console.log(err));


Promise.all([somethingWillHappend(), somethingWillHappend2()])
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })

