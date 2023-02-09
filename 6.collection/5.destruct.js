let arr = ['ilya', 'kantor']
let [firstName, lastName] = arr
console.log(firstName, lastName)

let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four)

let [one2, ,three2] = [1, 2, 3] 
console.log(one2, three2)

//
let s = 'I am'
let [a, b, c] = s
console.log(a, b, c)

//
arr = s.split(' ') // split 반대는 join이다
console.log(arr)

let [a2, b2] = arr
console.log(a2, b2) 

let [a3, b3] = new Set(arr)
console.log(a3, b3)

//
let user = {
    userName:'oscar',
    age: 6
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, val] of entries)
    console.log(key, val)

//
let map = new Map([
    ['userName', 'oscar'],
    ['age', 6]
])

for(let [key, val] of map)
    console.log(key, val)

//
let [x, y, ...rest] = [1, 2, 3, 4]
console.log(x, y, rest)

//
let [x2, y2=10] = [1]
console.log(x2, y2)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width)