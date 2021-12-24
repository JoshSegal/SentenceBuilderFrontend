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

  word: Word[];
  displayedColumns = ['Noun','Verb','Adjective','Adverb','Pronoun', 'Preposition', 'Conjunction', 'Determiner', 'Exclamation']

  constructor(private wordsService: WordsService, private router: Router) { }

  ngOnInit() {
    this.fetchWords();
  }

  fetchWords() {
    this.wordsService
    .getWords()
    .subscribe((data: Word[]) => {
      this.word = data;
      console.log('Data requested ... ');
      console.log(this.word);
    });
    
    
  }
  

}
