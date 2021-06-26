// const xhr = new XMLHttpRequest()
// xhr.open("get", "https://jsonplaceholder.typicode.com/users")

// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             const users = JSON.parse(xhr.response)
//             console.log(users)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()

function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open("get", url)

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }
    }
    xhr.send()
}
getRequest("https://jsonplaceholder.typicode.com/users", (err, response) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(response)
    }
}
)
getRequest("https://jsonplaceholder.typicode.com/posts", (err, response) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(response)
    }
}
)