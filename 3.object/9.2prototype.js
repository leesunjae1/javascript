let obj = {} // {} = new object를 짧게 줄여서 작성한거다

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object() //1번째 줄과 같다
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)

console.log(obj.toString())

let arr1 = [1, 2] //아래 코드를 줄여서 작성한것이다
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString())

let one = new Number(1)
console.log(one.toString())

function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString())