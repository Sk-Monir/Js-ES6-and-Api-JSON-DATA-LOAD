// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response))
// // .then(json => console.log(json))


// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url).then(response => response.json()).then(json => console.log(json))

const clickJsonDataLoad = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url).then(response => response.json()).then(json => console.log(json))
}