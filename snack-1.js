// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che 
// contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

function getPostTitle(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(request => request.json())
        .then(post => post.title);
}

getPostTitle(5).then(title => console.log(title));

function getPost(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(request => request.json())
        .then(post => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(request => request.json())
                .then(user => {
                    post.user = user;
                    return post;
                });
        });
}

getPost(5).then(post => console.log(post));