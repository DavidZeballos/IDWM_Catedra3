import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';

export interface VideoGame
{
  id: number;
  name: string;
  description: string;
  platform: string;
  price: string;
  releaseDate: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})


export class VideoGameService {
  private apiUrl = 'http://localhost:5000/api'
  constructor(private http: HttpClient) { }

  getVideogames(): Observable<VideoGame[]> {
    return this.http.get<VideoGame[]>(`${this.apiUrl}`);
  }
  getVideogameById(id: number): Observable<VideoGame> {
    return this.http.get<VideoGame>(`${this.apiUrl}/${id}`);
  }
  createVideogame(videoGame: FormData): Observable<VideoGame> {
    return this.http.post<VideoGame>(`${this.apiUrl}`, videoGame);
  }
  updateVideogame(id: number, videoGame: FormData): Observable<VideoGame> {
    return this.http.put<VideoGame>(`${this.apiUrl}`, videoGame);
  }
  deleteVideogame(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}