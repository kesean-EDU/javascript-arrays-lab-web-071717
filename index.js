const app = "I don't do much."

let kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
   let newKittens = kittens.slice(0,kittens.length - 1)
   return newKittens
}

function removeFirstKitten(){
  let newKittens = kittens.slice(1)
  return newKittens
}
