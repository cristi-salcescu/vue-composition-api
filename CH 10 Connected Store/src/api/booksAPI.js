const baseUrl = "http://localhost:3000";

function toJson(response){
    return response.json();
}

function fetchBooks(){
    return fetch(`${baseUrl}/books/`)
        .then(toJson)
}

function fetchBook(id){
    return fetch(`${baseUrl}/books/${id}`)
        .then(toJson)
}

export default { fetchBooks, fetchBook };