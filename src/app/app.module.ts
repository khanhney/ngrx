import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { wordsReducer } from './ngrx/words';
// model
import { FormsModule } from '@angular/forms';

// http
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListWordComponent } from './list-word/list-word.component';
import { WordComponent } from './word/word.component';
import { FormWordComponent } from './form-word/form-word.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWordComponent,
    WordComponent,
    FormWordComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({words: wordsReducer}),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
