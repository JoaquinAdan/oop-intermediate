function isObject(subject) {
  return typeof subject == 'object'
}

function isArray(subject) {
  return Array.isArray(subject)
}

function requiredParam(param) {
  throw new Error(param + ' es obligatorio')
}

function LearningPath({ name = requiredParam('name'), courses = [] }) {
  this.name = name
  this.courses = courses

  // const private = {
  //   _name: name,
  //   _courses: courses,
  // }
  // const public = {
  //   get name() {
  //     return private._name
  //   },
  //   set name(newName) {
  //     if (newName.length !== 0) private._name = newName
  //     else console.warn('Tu nombre debe tener al menos un caracter')
  //   },
  //   get courses() {
  //     return private._courses
  //   },
  // }
  // return public
}

function Student({
  name = requiredParam('name'),
  email = requiredParam('email'),
  age,
  twitter,
  facebook,
  instagram,
  learningPaths = [],
  approvedCourses = [],
} = {}) {
  this.name = name
  this.email = email
  this.age = age
  this.approvedCourses = approvedCourses
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  }
  const private = {
    _learningPaths: [],
  }
  Object.defineProperty(this, 'learningPaths', {
    get() {
      return private._learningPaths
    },
    set(newLP) {
      if (newLP instanceof LearningPath) private._learningPaths.push(newLP)
      else console.warn(`Tu LP "${newLP?.name}" no es una instancia de LearningPath`)
    },
  })

  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex]
  }

  // const private = {
  //   _name: name,
  //   _learningPaths: learningPaths,
  // }
  // const public = {
  //   age,
  //   email,
  //   learningPaths,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private._name
  //   },
  //   set name(newName) {
  //     if (newName.length !== 0) private._name = newName
  //     else console.warn('Tu nombre debe tener al menos un caracter')
  //   },
  //   get learningPaths() {
  //     return private._learningPaths
  //   },
  //   set learningPaths(newLP) {
  //     if (!newLP.name) return console.warn('Tu LP no tiene nombre')
  //     if (!newLP.courses) return console.warn('Tu LP no tiene cursos')
  //     if (!Array.isArray(newLP.courses)) return console.warn('Tu LP no es una lista de cursos')
  //     const LP = createLearningPath(newLP)
  //     private._learningPaths.push(LP)
  //   },
  // }

  // Object.defineProperty(public, 'readName', {
  //   configurable: false,
  //   writable: false,
  // })
  // Object.defineProperty(public, 'changeName', {
  //   configurable: false,
  //   writable: false,
  // })

  // return public
}

const escuelaWeb = new LearningPath({ name: 'Escuela web' })
const escuelaData = new LearningPath({ name: 'Escuela data' })
const juan = new Student({
  name: 'juan',
  email: 'juan@juan.com',
  learningPaths: [escuelaWeb, escuelaData, { name: 'IMPOSTOR' }],
})
