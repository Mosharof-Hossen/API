let arr = [1, 2, 3, 5]
let sqr = arr.map(v => v * v)
console.log(sqr)

function asyncMap(arr, cb) {
    return arr.map(v => {
        setTimeout(()=>cb(v), 0)
    })
}

let qbarr = asyncMap(arr, v => {
    console.log(v)
})
console.log(qbarr)