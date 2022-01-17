import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtifactType } from '../models/artifact-type.model';

const baseUrl = 'http://localhost:8080/artifact-type';

@Injectable({
  providedIn: 'root'
})
export class ArtifactTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ArtifactType[]> {
    return this.http.get<ArtifactType[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  findByName(name: any): Observable<ArtifactType[]> {
    return this.http.get<ArtifactType[]>(`${baseUrl}?name=${name}`);
  }  
}
