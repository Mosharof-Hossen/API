const url = "https://jsonplaceholder.typicode.com"

fetch(`${url}/users`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return Promise.resolve("Something")
    })
    .then(str=>{
        console.log(str)
        return Promise.resolve("another resolve")
    })
    .then(str=>{
        console.log(str)
    })
    .catch(e => {
        console.log(e)
    })