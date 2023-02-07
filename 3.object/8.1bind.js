let user = {
    userName: 'madona',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user.greet()

setTimeout(user.greet, 100) // setTimeout엔 function을 넣어야한다

let fn = user.greet
setTimeout(fn, 200)

setTimeout(() => user.greet(), 300)