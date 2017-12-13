import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';


// http
import { WordService } from '../ngrx/word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  providers: [WordService]
})
export class WordComponent implements OnInit {
  @Input() word;

  constructor(private store: Store<any>, private wordService:WordService) { }

  ngOnInit() {
        
  }
  removeWord(){
    // this.store.dispatch({type: 'REMOVE_WORD', _id: this.word._id});
    this.wordService.deleteWord(this.word._id)
      .then(()=> this.store.dispatch({type: 'REMOVE_WORD', _id: this.word._id}))
      .catch(err => console.log(err));
  };

  toogleWord(){
    // this.store.dispatch({type: 'TOOGLE_WORD', _id: this.word._id});
    
      // cách 2
      /*
       */

      const { _id, en, vn, isMemorized } = this.word;
      this.wordService.toogleIsMemorized(_id, !isMemorized, en, vn)
        .then(res => {
           this.store.dispatch({type: 'TOOGLE_WORD', _id: this.word._id});
        });
  }
}
