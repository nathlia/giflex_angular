import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artifact } from '../models/artifact.model';

const baseUrl = 'http://localhost:8080/artifacts';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Artifact[]> {
    return this.http.get<Artifact[]>(baseUrl);
  }

  get(id: any): Observable<Artifact> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any, charaId: any): Observable<any> {
    return this.http.post(`${baseUrl}/${charaId}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }  

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
