const baseURL = 'https://api.themoviedb.org/3'
const youtubeUrl = 'https://www.youtube.com/embed/'
const urls = {
    getMovie:(page:number):string=>`/discover/movie?page=${page}`,
    getGenre:'/genre/movie/list',
    getMovieByGenre:(genreId:number, page:number):string => `/discover/movie?with_genres=${genreId}&page=${page}`,
    getVideo:(movieId:number):string=> `/movie/${movieId}/videos`,
    searchMovie:(query:string,page:number):string=> `/search/movie?query=${query}&page=${page}`,
    getUpcomingMovie:(page:number):string=> `/movie/upcoming?language=en-US&page=${page}`
}


export {
    urls,
    baseURL,
    youtubeUrl

}