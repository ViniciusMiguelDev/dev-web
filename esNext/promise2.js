setTimeout(function () {
  console.log("Executando callback...");

  setTimeout(function () {
    console.log("Executando outro callback...");

    setTimeout(function () {
      console.log("Executando o terceiro callback...");
    }, 2000);
  }, 2000);
}, 2000);

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando Promise...");
      resolve();
    }, tempo);
  });
}

esperarPor(3000)
.then(() => esperarPor())
.then(esperarPor())