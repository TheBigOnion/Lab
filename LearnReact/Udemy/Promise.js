const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise Rejected')

    }, 2000)
});

myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
console.log('\n');

//Old syntax
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//Let's use sync await
const fetchData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData();