const greeting = 'hello'

function say(userName) { // say = global scope, userName = local scope
    console.log(greeting, userName)
}

say('john')