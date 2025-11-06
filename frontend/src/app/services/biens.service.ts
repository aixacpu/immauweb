import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiensService {

  private apiUrl = 'http://localhost:8000/api/biens';  // Remplace avec l'URL de ton API si nécessaire

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les biens
  getBiens(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Méthode pour récupérer un bien par son ID (c'est celle que tu veux utiliser)
  getBienById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Méthode pour créer un bien
  createBien(bien: any): Observable<any> {
    return this.http.post(this.apiUrl, bien);
  }

  // Méthode pour mettre à jour un bien
  updateBien(id: number, bien: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bien);
  }

  // Méthode pour supprimer un bien
  deleteBien(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
