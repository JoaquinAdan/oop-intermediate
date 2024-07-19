// let numerito = -1000

// while (numerito < 5) {
//   console.log(numerito)
//   numerito++
// }

// function recursiva(numerito) {
//   console.log(numerito)
//   if (numerito < 5) return recursiva(numerito + 1)
//   else return 5
// }

// recursiva(-100000)

const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'AAAAAA'
  },
}

// function recursiva(){
//   if(/*validación*/){
//      llamados recursivos
//   } else {
//      llamados normales, sin recursividad
//   }
// }

const numeritos = [0, 1, 2, 7, 4, 5, 6, 3, 8, 9, 123, -2]
// let numerito = 0
// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index]
//   console.log({ index, numerito })
// }

function recursive(numbersArray) {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0]
    console.log(firstNum)
    numbersArray.shift()
    return recursive(numbersArray)
  }
}

// const length = numeritos.length;
// for (let index = 0; index < length; index++) {
//   const firstNum = numeritos[0];
//   console.log(firstNum);
//   numeritos.shift();
// }
