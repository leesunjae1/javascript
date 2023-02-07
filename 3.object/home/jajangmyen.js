/* 
2.function/home/3.jajangmyeon.js 를 객체지향으로
refactoring 하라
*/
function Food(foodName) {
    this.foodName = foodName
}

function Chef(foodName) {
    this.foodName = foodName
    this.cook = food => food
}

function Waiter() {
    this.pass = food => console.log(food)
}

const chef1 = new Chef('달콤한'${food})
const chef2 = new Chef2()
const waiter = new Waiter()

waiter.pass(chef1.cook('짜장면'))          
                      
