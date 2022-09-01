const moviesApiUrl = 'https://my-json-server.typicode.com/Jeck99/movies-api/movies'
export default async function moviesApi(){
    try {
        return await fetch(moviesApiUrl)
        .then(res => res.json())
    } catch (error) {
        console.log(error);
    }
}