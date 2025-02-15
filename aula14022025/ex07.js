// Map

// const map = new Map()

// map.set('Nome', 'Victor')
// map.set('Idade', 21)
// map.set('Usuario', 'aluno')

// map.forEach((v, k)=> console.log(`${k}: ${v}`))


// WeakMap

const obj = {id: 1}

const wm = new WeakMap()

wm.set(obj, 'aluno 1')

console.log(wm.get(obj))