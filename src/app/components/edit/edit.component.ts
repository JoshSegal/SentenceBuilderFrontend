import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private wordsService: WordsService, private router: Router) { }

  ngOnInit(): void {
  }

}
