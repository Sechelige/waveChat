const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')
document.body.appendChild(container)


var request = new XMLHttpRequest()
var dataResp;

request.open('GET', 'http://localhost:8080/app/user', true)
request.onload = function () {
// Begin accessing JSON data here
var data = JSON.parse(this.response)

console.log(data)
if (request.status >= 200 && request.status < 400) {
data.forEach(user => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    
    const h1 = document.createElement('h1')
    h1.textContent = user.nomU;
    console.log(user.nomU)

    const p = document.createElement('p')
    p.textContent = `${user.prenomU} ${user.telU}`
    console.log(user.prenomU)
    console.log(user.telU)

    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(p)
    
});
} else {
    console.log('error')
}
}
request.send();