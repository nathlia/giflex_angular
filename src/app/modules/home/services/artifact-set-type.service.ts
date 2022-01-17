import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtifactSetType } from '../models/artifact-set-type.model';

const baseUrl = 'http://localhost:8080/artifact-set-type';

@Injectable({
  providedIn: 'root'
})
export class ArtifactSetTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ArtifactSetType[]> {
    return this.http.get<ArtifactSetType[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  findByName(name: any): Observable<ArtifactSetType[]> {
    return this.http.get<ArtifactSetType[]>(`${baseUrl}?name=${name}`);
  }
}
