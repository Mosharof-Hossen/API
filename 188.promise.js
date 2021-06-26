// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve,3000,"One")
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve,2000,"Two")
// })
// console.log(p1)
// console.log(p2)

// p1.then((v)=>{
//     console.log(v)
// }).catch((e)=>{
//     console.log(e)
// })

// p2.then((v)=>{
//     console.log(v)
// })

function getIphone(isPassed) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve("I have got an IPhone")
            } else {
                reject(new Error("You have Failed"))
            }
        }, 2000)
    })
    return promise
}


getIphone(false)
    .then((v) => {
        console.log(v)
    })
    .catch((e)=>{
        console.log(e.message)
    })