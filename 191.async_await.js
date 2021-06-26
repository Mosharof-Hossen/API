// function myPromise(){
//     return Promise.resolve("Test value")
// }

// console.log(myPromise())

// async function test(){
//     return "Test"
// }

// test().then(v=>console.log(v))

// let p1 = new Promise(resolve => {
//     setTimeout(resolve,3000,"Test value")
// })

// async function myAsyncFunc(){
//     // p1.then(v=>console.log(v))
//     let v = await p1
//     console.log(v)
// }
// myAsyncFunc()


async function fetchData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()

        console.log(data)
    } catch (e) {
        console.log(e.message)
    }
}

fetchData()