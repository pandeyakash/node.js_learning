// const fakeAPI = (url) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.floor(Math.random() * 10) + 1;
//         setTimeout(() => {
//             if(random > 5) {
//                 resolve("Here is your Data!!");
//             } else {
//                 reject("Errorrr!!!!!!")
//             }
//         }, 2000)
//     })
// }

// const callFakeAPI = async() => {
//     try {
//         const response = await fakeAPI("xyz.com");
//         return response;
//     } catch (error) {
//         throw error;
//     }
// }
// callFakeAPI()
// .then(() => {
//     console.log("Resolved");
// })
// .catch(() => {
//     console.log("Rejected");
// })

const login = async(username, password) => {
    if(!username || !password) throw "Missing Credentials"
    if(password === "password") {
        return "Welcome!"
    }
}

login("akash", "password")
    .then((res) => {
        console.log("Login Successful!!")
        console.log(res);
    })
    .catch((err) => {
        console.log("Error", err)
    })