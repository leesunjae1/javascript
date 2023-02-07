function makeFn() {
    let userName = 'parket'

    function displayUserName() {
        console.log(userName)
    }

    return displayUserName
}

let myFn = makeFn()

myFn()