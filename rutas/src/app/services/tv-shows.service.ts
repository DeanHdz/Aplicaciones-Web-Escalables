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
    this.tvShows = this.tvShows.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
  }

  //Hacer peticion a proyecto de "express", es necesario correr el proyecto simultaneamente
  public fetchTvShows(): void {
    this.http.get("http://localhost:8080/api/tvshows").subscribe({
      next: (response : any) => {
        console.log(response);
        this.tvShows = response.result;
      },
      error: (error : any) => {
        console.log(error);
      }
    });
  }
}
