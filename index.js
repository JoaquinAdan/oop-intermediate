class Patito {
  static sonidito = 'cuack!'
  static hacerSonidito() {
    return 'cuack!'
  }
}

// console.log(Patito.sonidito)
// console.log(Patito.hacerSonidito())

const objetito = {
  name: 'Juanito',
  email: 'juanito@frijolitos.io',
  age: 18,
}

Object.keys(objetito) // ['name', 'email', 'age']
Object.getOwnPropertyNames(objetito) // ['name', 'email', 'age']
Object.entries(objetito) // [['name', 'Juanito'], ['email', 'juanito@frijolitos.io'], ['age', 18]]
Object.getOwnPropertyDescriptors(objetito) // { name: { value: 'Juanito', writable: true, enumerable: true, configurable: true }, email: { value: 'juanito@frijolitos.io', writable: true, enumerable: true, configurable: true }, age: { value: 18, writable: true, enumerable: true, configurable: true } }
