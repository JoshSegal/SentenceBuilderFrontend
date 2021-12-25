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

  words: Word[] =[];
  displayedColumns = ['Noun','Verb','Adjective','Adverb','Pronoun', 'Preposition', 'Conjunction', 'Determiner', 'Exclamation']

  constructor(private issueService: WordsService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.issueService
    .getWords()
    .subscribe ((data: any) => {
      this.words = data;
      console.log('Data requested ... ');
      console.log(this.words);
    });
  }
}