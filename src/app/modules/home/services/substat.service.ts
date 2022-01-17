import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Substat } from '../models/substat.model';

const baseUrl = 'http://localhost:8080/substats';

@Injectable({
  providedIn: 'root'
})
export class SubstatService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Substat[]> {
    return this.http.get<Substat[]>(baseUrl);
  }

  get(id: any): Observable<Substat> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
