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
function isObject(subject) {
  return typeof subject == 'object'
}

function isArray(subject) {
  return Array.isArray(subject)
}

//Deep copy para copiar hasta objetos simples
const clone = JSON.parse(JSON.stringify(obj1));

//Deep copy para copiar hasta funciones
function deepCopy(subject) {
  let copySubject
  const subjectIsArray = isArray(subject)
  const subjectIsObject = isObject(subject)

  if (subjectIsArray) copySubject = []
  else if (subjectIsObject) copySubject = {}
  else return subject

  for (key in subject) {
    const keyIsObject = isObject(subject[key])
    if (keyIsObject) copySubject[key] = deepCopy(subject[key])
    else {
      if (subjectIsArray) copySubject.push(subject[key])
      else copySubject[key] = subject[key]
    }
  }

  return copySubject
}
