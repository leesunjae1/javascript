let promise = new Promise((resolve, reject) =>
    setTimeout(() => resolve('hello'), 1000))
console.log(promise) //resolve 전 , pending 중

setTimeout(() => console.log(promise), 1100) //resolve 후

promise.then(result => console.log(result))