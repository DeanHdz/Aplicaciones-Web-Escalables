import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  public contador : number = 10000;
  public tvShows: Show[] = [];

  constructor(private http: HttpClient) { }

  public incrementa(): void{
    this.contador++;
  }

  public decrementa(): void {
    this.contador--;
  }

  public setAllAs(value: boolean): void {
    this.tvShows.forEach(item => item.isSelected = value);
  }

  public searchByTerm(value: string): void {
    //this.tvShows = this.tvShows.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    this.fetchTvShows(value);
  }

  //Hacer peticion a proyecto de "express", es necesario correr el proyecto simultaneamente
  public fetchTvShows(searchTerm = ""): void {
    const token = localStorage.getItem("auth_token") ?? ""; //Nada asegura si el token existe o no, se ponen 2 signos para que el valor sea "" si no existe
    this.http.get("http://localhost:8080/api/tvshows?searchTerm="+searchTerm, {
      headers: {
        "Authorization": token
      }
    }).subscribe({
      next: (response : any) => {
        console.log(response);
        this.tvShows = response.result;
      },
      error: (error : any) => {
        console.log(error);
      }
    });
  }

  public addShow(show: Show): void {

    this.http.post("http://localhost:8080/api/tvshows", show).subscribe({
      next: (response : any) => {
        console.log(response);
        this.tvShows.push(show);
      },
      error: (error : any) => {
        console.log(error);
      }
    });
  }

  public removeShow(showId: Number): void {

    this.http.delete("http://localhost:8080/api/tvshows/"+showId).subscribe({
      next: (response : any) => {
        console.log(response);
        this.tvShows = this.tvShows.filter(item => item.id !== showId);
      },
      error: (error : any) => {
        console.log(error);
      }
    });
  }

  public modifyShow(show: Show): void {
    this.http.put("http://localhost:8080/api/tvshows/"+show.id, show).subscribe({
      next: (response : any) => {
        console.log(response);
        this.tvShows = this.tvShows.map(item => item.id === show.id ? show : item);
      },
      error: (error : any) => {
        console.log(error);
      }
    });
  }

}
