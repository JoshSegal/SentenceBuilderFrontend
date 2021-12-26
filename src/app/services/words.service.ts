import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  uri = 'http://localhost:8090';

  constructor(private http: HttpClient) { }


getWords() {
  return this.http.get(`${this.uri}/words`);
}
}
     