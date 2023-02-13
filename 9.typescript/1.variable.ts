let msg: string = 'hello'
// msg = 1  

let val: number = 1
let nullableStr: string | null = null //유니온타입
nullableStr = 'Hi'
// nullableStr = undefined

let undefinedOrNUmber: undefined | number
undefinedOrNUmber = 10
undefinedOrNUmber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

let a = 1
let b = 'b'
let c = true

// ECMAscript6 = es6