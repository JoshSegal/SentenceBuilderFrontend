import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  uri = 'http://localhost:8090';

  constructor(private http: HttpClient) { }


getWords() {
  return this.http.get(`${this.uri}/nouns`);
}

getWordByNoun(noun: any) {
  return this.http.get(`${this.uri}/words/${noun}`);
}

getWordByVerb(Verb: any) {
  return this.http.get(`${this.uri}/words/${Verb}`);
}
getWordByAdjective(Adjective: any) {
  return this.http.get(`${this.uri}/words/${Adjective}`);
}
getWordByPronoun(Pronoun: any) {
  return this.http.get(`${this.uri}/words/${Pronoun}`);
}


addWords(Noun: string, Verb: string, Adjective: string, Adverb: string, Pronoun: string, Preposition: string, Conjunction: string, Determiner: string, Exclamation: string) {
  const words = {
    Noun :        Noun,
    Verb :        Verb,
    Adjective :   Adjective,
    Adverb :      Adverb,
    Pronoun :     Pronoun,
    Preposition : Preposition,
    Conjunction : Conjunction,
    Determiner :  Determiner,
    Exclamation : Exclamation
  };
  return this.http.post(`${this.uri}/words/add`, words);
}
}
     