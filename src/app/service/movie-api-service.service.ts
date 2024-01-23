import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, ObservedValueOf } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
  baseur1 = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  //bannerapidata
  bannerApiData():Observable<any>
  {
    // return this.http.get('${this.baseur1}/trending/all/week?api_key=${this.apikey}');
    return this.http.get(`${this.baseur1}/trending/all/week?api_key=${this.apikey}`);

  }

  //trendingmoviesapidata
  tendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseur1}/trending/movie/day?api_key=${this.apikey}`);
  }

//  getSearchMovie(data:any):Observable<any>
//   {
//     return this.http.get(`${this.baseur1}/search/movie/?api_key=${this.apikey}&query=${data.query}`);
//   }



//searchmovie
getSearchMovie(query: string): Observable<any> {
  const url = `${this.baseur1}/search/movie`;

  // Paramètres de la requête
  const params = new HttpParams()
    .set('query', query)
    .set('api_key', this.apikey);

  // Effectuer la requête HTTP
  // console.log(data,movie#);
  return this.http.get(url, { params });
}


//getmoviedetails
// getMovieDetails(data:any):Observable<any>
// {
//   return this.http.get('${this.baseur1}/movie/${data}?api_key=${this.apikey}')
// }
getMovieDetails(data: any): Observable<any> {
  return this.http.get(`${this.baseur1}/movie/${data}?api_key=${this.apikey}`);
}


//getMovieVideo
getMovieVideo(data:any):Observable<any>
{
  return this.http.get(`${this.baseur1}/movie/${data}/videos?api_key=${this.apikey}`)
}

//getMovieCast
getMovieCast(data:any):Observable<any>
{
  return this.http.get(`${this.baseur1}/movie/${data}/credits?api_key=${this.apikey}`)
}

//action
fetchActionMovies():Observable<any>
{
  return this.http.get(`${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=28`);
}
//adventure
fetchAdventureMovies():Observable<any>
{
  return this.http.get(`${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=12`);
}

//animation
fetchAnimationMovies():Observable<any>
{
  return this.http.get(`${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=16`);
}

//comedy
fetchComedyMovies():Observable<any>
{
  return this.http.get(`${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=35`);
}

//documentary
fetchDocumentaryMovies():Observable<any>
{
  return this.http.get(`${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=99`);
}

//science-fiction
fetchScienceFictionMovies():Observable<any>
{
  return this.http.get(`${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=878`);
}

//thriller
fetchThrillerMovies():Observable<any>
{
  return this.http.get(`${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=53`);
}
}
