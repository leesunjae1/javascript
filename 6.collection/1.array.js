let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr.length)

let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop())
console.log(arr)


arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())
console.log(arr)

arr = [1, 2, 3]
arr.reverse()
console.log(arr)

a = [0, 1, 2]
b= a.slice(1)
console.log(b, a)

arr = [0, 7, 8, 5]
arr.splice(0, 2, 1, 2, 3, 4) 
console.log(arr)

arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b'))
console.log(arr)

arr = ['a', 'b', 'c']
// splice()로 arr 에서 'b'만을 삭제하라
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s)
// s가 view object 인지를 확인하라
console.log(s == arr)

arr = [8, 11, 22, 23, 9] //string으로 생각해 unicode로 비교한다
console.log(arr.sort())

console.log(arr.sort((a, b) => a - b))
console.log(arr.sort((a, b) => b - a))

arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

// 위와 다른 for로 arr을 iterating 하라
for(let e of arr) console.log(e)
for(let key in arr) console.log(arr[key])

function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e. toUpperCase()
}

arr = ['a', 'b']

console.log()
arr.forEach(print)  //forEach의 콜백 3가지 방법

arr.forEach(print2)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)
console.log(arr, arr2, arr == arr2)

//
let group = {
    title: 'art',
    students:['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title,':', studentName))
    }
}

group.list()

//
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting, typeof greeting)

console.log(arr.join('/'))
// arr.join()에서 'helloworld2' 를 return하라
console.log(arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()
console.log(str, typeof str)

//
str = String(arr)
console.log(str, typeof str)

//
str =JSON.stringify(arr) 
console.log(str, typeof str)

//
const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]
// find는 콜백에서 true가 나온 상황을 리턴한다 ( 첫번째 상황을 리턴한다)
const item = items.find(item => item.itemName == 'book')
console.log(item)

// filter (모든 상황이 리턴한다)
const interest = items.filter((item, i) => item.itemName == 'book')
console.log(interest)

//
const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)    