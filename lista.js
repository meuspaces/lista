// Definicao das variaveis

let class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio']
let class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']
let class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 'teresinha', 'emanuel', 'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 'marcelo', 'benedita', 'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo']

// => Parte 1: ordenar os nomes das aulas de forma decrescente (ordem alfabética)

// Quicksort que ordena invertido

function quicksortReverse (array) {
  if (array.length <= 1) {
    return array
  }

  const pivot = array[0]
  const left = []
  const right = []

  for (let i = 1; i < array.length; i++) {
    array[i] > pivot ? left.push(array[i]) : right.push(array[i])
  }

  return quicksortReverse(left).concat(pivot, quicksortReverse(right))
};

// Ou simplesmente usar nativo do JS

class1 = class1.sort().reverse()
class2 = class2.sort().reverse()
class3 = class3.sort().reverse()

// => Parte 2: inverter as listas usando recursividade

/**
 * @param {Array} classList
 * @param {Array} stack
 */
function recursiveRevert(classList, stack) {
  if (classList.length === 0) {
    return stack
  }

  const lastElement = classList.pop()
  stack.push(lastElement)  
  return recursiveRevert(classList, stack)
}

class1 = recursiveRevert(class1, [])
class2 = recursiveRevert(class2, [])
class3 = recursiveRevert(class3, [])

// class1, class2 e class3 agora estão invertidas

// => Parte 3, quantidade de faltas de um determinado aluno.

function binarySearch (collection, element) {
  let start = 0
  let end = collection.length - 1

  while (start <= end) {
    // Find the middle
    const mid = Math.floor((start + end) / 2)

    // Found the element!
    if (collection[mid] === element) {
      return true
    } else if (collection[mid] < element) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return false
}

// Quantas faltas um aluno tem?

const student = "yuri"

const presentFirst = binarySearch(class1, student)
const presentSecond = binarySearch(class2, student)
const presentThird = binarySearch(class3, student)

function absenceToNumber(presence) {
  return presence ? 0 : 1
}

console.log(
  student + " faltou: " +
  (
    absenceToNumber(presentFirst) +
    absenceToNumber(presentSecond) + 
    absenceToNumber(presentThird)
  ) +
  " vezes"
)