import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private wordsService: WordsService, private router: Router) { }

  ngOnInit(): void {
  }

}
