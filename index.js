const http = new HttpRequests 

const data = [
    name: 'John', 
    username: 'johndoe', 
    email: 'jdoe@gmail.com'
]

http.get('http://localhost:3000/teams')
    .then(response => console.log(response))
    .catch(err => console.log(err))

http.post('http://localhost:3000/teams', data)
    .then(response => console.log(response))
    .catch(err => console.log(err))

http.put('http://localhost:3000/teams/1', data)
    .then(response => console.log(response))
    .catch(err => console.log(err))

http.delete('http://localhost:3000/teams/1')
    .then(response => console.log(response)) 
    .catch(err => console.log(err))