 /*let makeUser = function(userName, age) {
    return {
        userName: userName,
        age: age;
    }
}
*/
makeUser = function(userName, age) {   //가독성있게 변경 후
    return {
        userName,
        age
    }
}

console.log(makeUser('doris', 57))

function User(userName) {
    //this = {}    new를쓰면 추가 된다 
    this.userName = userName
    this.greet = () => console.log(`I am ${this.userName}.`)
    //return this  new를쓰면 추가 된다
}

let user1 = User('bob')
user1 = new User('bob')

console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

let human = new function() {
    this.humanName = 'meg'
    this.age = 27
}
console.log(typeof human, human.humanName)

function BigUser() {
    this.userName = 'amy'
    return {userName: 'beth'}
}

function SmallUser() {
    this.userName = 'lorie'
}

// SmallUser().userName 을 고쳐서 error 가 발생하지 않도록 하라
//console.log(BigUser().userName, SmallUser().userName)
console.log(BigUser().userName, SmallUser()?.userName)

const user = new Object()
console.log(user)
user.age = 12

// view object
const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user)

person.peronName = 'mandarin'
console.log(user)