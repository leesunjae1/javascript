let user1 = {
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    } //this에는 주어객체가 들어간다
}

let user2 = {
    userName: 'jade',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user1.greet()
user2.greet()

//
let userName = 'morpheus'

function greet() {
    console.log(`I am ${this.userName}.`)
}

greet()
greet.call(user1)
greet.call(user2)

//
user2 = {
    userName: 'colin'
}

user1.greet()
//user2.greet()

// user1.greet 을 이용해서, I am colin. 을 출력하라
user1.greet.call(user2)
