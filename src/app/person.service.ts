import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Persons } from '../models/persons';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})



export class PersonService {
  private url = 'api/persons';  // URL to web api

  constructor(  private http: HttpClient) {
  }
  /**
    GET:All persons data
   */
   getPersons(): Observable<Array<Persons>> {
    return this.http.get<Array<Persons>>(this.url);
  }
 
  /** POST: add a new person to the server */
  addPerson (person: Persons): Observable<Persons> {
    return this.http.post<Persons>(this.url, person, httpOptions);
  }
 
  /** DELETE: delete the person from the server */
  deletePerson (person: Persons | number): Observable<Persons> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.url}/${id}`;
 
    return this.http.delete<Persons>(url, httpOptions);
  }
 
  /** PUT: update the person on the server */
  updatePerson (person: Persons): Observable<any> {
    return this.http.put(this.url, person, httpOptions);
  }
}
