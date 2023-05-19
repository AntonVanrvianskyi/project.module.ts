export interface IMovie {
    id:number,
    title: string,
    poster_path:string,
    backdrop_path:string,
    release_date:string,
    overview:string,
    popularity:string,
    vote_average:number,
    genre_ids:number[]
}