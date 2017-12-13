import { Component, OnInit } from '@angular/core';

// reducer
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


// service
import { WordService } from '../ngrx/word.service';

interface words{
  _id: string,
  en: string,
  vn: string,
  isMemorized: boolean
}

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css'],
  providers: [WordService]
})
export class ListWordComponent implements OnInit {

  words:Observable<words[]>;

  constructor(private store: Store<any>, private wordService: WordService) { }

  ngOnInit() {
    this.words = this.store.select('words');
    this.wordService.getListWord()
      .then(result => {
          this.store.dispatch({type: 'GET_WORD', words: result.words})
      })
      .catch(err => console.log(err.message));

  }

}
