import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { Word } from 'src/app/word.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  words: any;
  public nouns: any = []
  public verbs: any = []
  public adjectives: any = []
  public adverbs: any = []
  public pronouns: any = []
  public prepositions: any = []
  public conjunctions: any = []
  public determiners: any = []
  public exclamations: any = []

  displayedColumns: any = ['Noun', 'Verb', 'Adjective', 'Adverb', 'Pronoun', 'Preposition', 'Conjunction', 'Determiner', 'Exclamation']

  constructor(private wordsService: WordsService, private router: Router) { }

  ngOnInit() {
    this.fetchWords();
  }

  fetchWords() {
    this.wordsService
      .getWords()
      .subscribe((data: any) => {
        this.words = data;
        this.words.forEach((e: any) => {
          this.nouns.push(e['Noun'])
          this.verbs.push(e['Verb'])
          this.adjectives.push(e['Adjective'])
          this.adverbs.push(e['Adverb'])
          this.pronouns.push(e['Pronoun'])
          this.prepositions.push(e['Preposition'])
          this.conjunctions.push(e['Conjunction'])
          this.determiners.push(e['Determiner'])
          this.exclamations.push(e['Exclamation'])
        });
        console.log('Data requested ... ');
        console.log(this.words);
      });
  }
  CreateSentence() {
  
  }

}