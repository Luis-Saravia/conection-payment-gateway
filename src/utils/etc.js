import os from 'os';
import express from 'express';

class Person {
  constructor(name, age, profesion, size){
    this.name = name;
    this.age = age;
    this.profesion = profesion;
    this.size = size;
  }

  get info() {
    return {
      name: this.name,
      age: this.age,
      profesion: this.profesion,
      size: this.size
    }
  };

  set info(name
    // , age, profesion, size
    ) {
    this.name = name;
    // this.age = age;
    // this.profesion = profesion;
    // this.size = size;

    return {
      name
      //  age, profesion, size
    }
  }

  // set info(age) {

  // }
}

console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem());
// console.log(os.cpus());
console.log(os.networkInterfaces());

// console.log(response.statusCode());

express().get('/', (resquest, response) => console.log(response.statusCode));

express().listen(3000, () => console.log(`Servidor iniciando en el puerto 3000`))