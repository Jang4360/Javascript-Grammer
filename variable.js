let animals=[
    "aardvark","albatross",'alpaca','alligator','ant','ape','armaillo','donkey'
]
animals.pop()
console.log(animals)

animals.push('dog')
console.log(animals)
console.log(animals.includes('ape'))
console.log(animals.indexOf('ape'))
animals[5]='deer'
console.log(animals)

console.log(animals.slice(2))
let newanimals=animals.slice(animals.indexOf('alpaca'),animals.indexOf('ant')+1)
console.log(newanimals)
