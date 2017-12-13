import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';


// service
import { WordService } from '../ngrx/word.service';
@Component({
  selector: 'app-form-word',
  templateUrl: './form-word.component.html',
  styleUrls: ['./form-word.component.css'],
  providers: [WordService]
})
export class FormWordComponent implements OnInit {

  constructor(private store: Store<any>, private wordService: WordService) { }
  en = '';
  vn = '';
  ngOnInit() {
  }
  submitFormWord(result: NgForm){
    // const word = {_id: Math.random() + '', en: result.value.en, vn: result.value.vn, isMemorized: false};
    // this.store.dispatch({type: 'ADD_WORD', word});
    this.wordService.postWordService(result.value)
      .then(result => {
        this.store.dispatch({type: 'ADD_WORD', word: result.word})
      })
      .catch(err => console.log(err.message));
  }
}
