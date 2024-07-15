const juan = {
  name: 'Juanito',
  age: 18,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse) {
    console.log('this', this)
    console.log('this.approvedCourses', this.approvedCourses)
    this.approvedCourses.push(newCourse)
  },
}

// console.log(Object.keys(juan))
// console.log(Object.getOwnPropertyNames(juan))
// console.log(Object.entries(juan))

// Object.defineProperty(juan, 'prueba', {
//   value: 'Soy una propiedad',
//   writable: false,
//   enumerable: false,
//   configurable: false,
// })
// console.log(juan)
// juan.prueba = 'Otra cosa'
// console.log(juan)

// Object.defineProperty(juan, 'navigator', {
//   value: 'Chrome',
//   enumerable: false,
//   writable: true,
//   configurable: true,
// })
// Object.defineProperty(juan, 'editor', {
//   value: 'VSCode',
//   enumerable: true,
//   writable: false,
//   configurable: true,
// })
// Object.defineProperty(juan, 'terminal', {
//   value: 'WSL',
//   writable: true,
//   enumerable: true,
//   configurable: false,
// })
// Object.defineProperty(juan, 'pruebaNasa', {
//   value: 'extraterrestre',
//   writable: false,
//   enumerable: false,
//   configurable: false,
// })

// console.log(juan.navigator)
// console.log(Object.keys(juan))
// console.log(Object.getOwnPropertyNames(juan))
// console.log((juan.navigator = 'Firefox'))
// console.log(juan.navigator)

// console.log((juan.editor = 'Sublime'))
// console.log(juan.editor)
// console.log(delete juan.editor)
// console.log(juan.editor)

// console.log(juan)
// console.log(Object.keys(juan))
// console.log(juan.terminal = 'cmder')
// console.log(juan.terminal)
// console.log(delete juan.terminal)
// console.log(juan.terminal)

// console.log((juan.pruebaNasa = 'ovnis'))
// console.log(delete juan.pruebaNasa)
// console.log(juan.pruebaNasa)

// Object.seal(juan)
Object.freeze(juan)
console.log(Object.getOwnPropertyDescriptors(juan))
console.log(juan)