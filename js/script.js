function findUser(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {document.getElementById('name').innerText = ` Hi I am ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}

I live in ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country} ${data.results[0].location.postcode}

Email: ${data.results[0].email}`})
}
setInterval(()=>{
    findUser();

},3000)
