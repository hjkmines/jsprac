const posts = [
    {title: 'Post One', body: 'This is post 1'},
    {title: 'Post Two', body: 'This is post 2'} 
]

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = true; 

            if(!error) {
               resolve()
            } else {
                reject('Error: Something went wrong')
            }

        }, 2000)
    })
}

createPost({title: 'Post Three', body: 'This is post 3'})
    .then(getPosts)
    .catch((error) => {
        console.log(error)
    })