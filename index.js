// Add your code here
function submitData(userName, userEmail){
    let formData = {
      name: userName,
      email: userEmail
    }
   
    let configObj = {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body: JSON.stringify(formData)
    }
   
     return fetch("http://localhost:3000/users", configObj)
       .then(function(resp) {
         return resp.json();
       })
       .then(function(obj) {
         let userId = document.createTextNode(`${obj["id"]}`)
         document.body.prepend(userId)
       })
       .catch(function(error) {
         let message = document.createTextNode(`${error.message}`)
         document.body.prepend(message)
       })
   }