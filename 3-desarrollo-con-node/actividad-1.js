console.log("Inicio del script")

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 10;
};

const calcularNumeros = (cantidad, min, max) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let numbers = {};
      for (let i = 0; i < cantidad; i++) {
        const num = randomNum(min, max);
        if (numbers[num]) numbers[num]++;
        else numbers[num] = 1;
      }
      resolve(numbers);
    }, 0);
  });
};

// console.log("Inicio de la ejecucion");
const resultPromise = calcularNumeros(8e7, 10, 15);
// // console.log(resultPromise);
resultPromise.then((value) => {
  console.log("El resultado de la promesa fue:\n");
  console.log(value);
});
//
// console.log("Fin de la ejecucion");

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// CON CALLBACKS

function generateRandomNums(quantity, min, max, callback) {
  const numbers = []
  for (let i = 0; i < quantity; i++) {
    numbers.push(randomNum(min, max))
  }
  callback(null, numbers)
}

function sortNumbers(arrayNumbers, callback) {
  let obj = {};
  arrayNumbers.forEach(v => obj[v] = (obj[v] ?? 0) + 1)
  callback(null, obj)
}

function printResult(value) {
  console.log("Resultado del Callback con process.nextTick: \n")
  console.log(value)
}

const withProcess = () => generateRandomNums(7e7, 33, 39, (err, numbers) => {
  if (err) {
    console.error(err);
    return
  }
  sortNumbers(numbers, (err, result) => {
    if (err) {
      console.error(err);
      return
    }
    printResult(result)
  })
})

process.nextTick(withProcess)

function doStep1(init, callback) {
  setTimeout(() => {
    const result = init + 1;
    callback(result);
  }, 0)
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log("Resultado de operacion con setTimeout: \n")
        console.log({ result3 })
      });
    });
  });
}

doOperation()



console.log("Fin del script")





















