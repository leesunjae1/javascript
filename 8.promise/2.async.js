async function fn() { //async 붙히면 promise가 리턴된다
    return 1
}
let f = fn()
console.log(f)

f.then(console.log)

//
fn = async function() {
    return Promise.resolve(2)
}
fn().then(console.log)

//
fn = async function() {
    return Promise.reject(new Error(3))
}
fn().catch(e => console.log(e. message))

//
fn = async function() {
    let promise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(4), 1000))
    let result = await promise     //await은 async function 안에서만 가능하다
    console.log(result)
}
fn()

//
class Waiter {
    async order() {
        return await Promise.resolve('짜장면')
    }
}

new Waiter().order().then(console.log)
