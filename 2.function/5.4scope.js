let userName = 'neo'
sayHi()

function sayHi() {
    console.log('Hi', userName)
}

sayHi()

sayHello()   //err

const sayHello = function() {
    console.log('Hell', userName)
}

sayHello()

