const baseURL = 'https://api.themoviedb.org/3'
const youtubeUrl = 'https://www.youtube.com/embed/'
const urls = {
    getMovie:'/discover/movie',
    getGenre:'/genre/movie/list',
    getMovieByGenre:(genreId:number, page:number):string => `/discover/movie?with_genres=${genreId}&page=${page}`,
    getVideo:(movieId:number):string=> `/movie/${movieId}/videos`
}


export {
    urls,
    baseURL,
    youtubeUrl

}