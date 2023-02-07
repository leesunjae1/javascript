let foo = "I am a string."
foo = 'So am I'
foo = `back tick`

//string type
foo = 'He said, "javascipt is awesome"'
foo = "He said, \"javascipt is awesome\""

//number type
foo = 1
foo = 1.0

console.log(1 / 0) // Infinity : 무한대
console.log('a' / 1) //NaN : Nat a Number

foo = 1
console.log(isFinite(foo))
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo))
console.log(parseInt(foo) + 1) // int 확인

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-7890123'
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2

a = Infinity * NaN
console.log(a, b)

foo = 1n // 2**53 - 1를 초과하면 bigint이다

const okay = true
const fail = false

let val = null

let val2
console.log(val2) //undefined 값의 종류이다
val2 = undefined

let id = Symbol('id') 
console.log(typeof id)

val = 1
val = String(val)
console.log(typeof val)

val = '6' / '2'
console.log(val)

val = false / true
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false))
console.log(Number('a'), Number(undefined), Number(NaN))

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) //값이 있어서 true이다
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) // 값이 없다 false