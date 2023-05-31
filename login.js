const form = document.querySelector("form")

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const autheticated = authetication(username, password)

    if(autheticated){
        //alert("correct")
        window.location.href = "logout.html"
    } else {
        alert("wrong")
    }
})

//function for checking username and passsword

function authetication(username, password){
    if(username === "aman" && password === "password"){
        return true
    } else {
        return false
    }
}