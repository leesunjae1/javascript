/*
4.class/home/2.jajangmyeon.js 를 promise 로 
refactoring 하라
*/
class Food {
    promise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(foodName), 1000))    
}

class Chef {
    promise = newPromise(())
    
}

class Waiter{
    async order(foodName, chef) {
        return await Promise.resolve(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)

