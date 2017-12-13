import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()

export class WordService implements OnInit{
    
    // contructor
    constructor(private http: Http){}
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    // lấy
    getListWord(){
        return this.http.get('http://localhost:3000/word')
            .toPromise()
            .then(result => result.json())
            .catch(err => console.log(err.message));
    };
    // thêm
    postWordService(word){
        const url = "http://localhost:3000/word";
        const headers = new Headers({'Content-Type':'application/json'});
        const body = JSON.stringify(word);

        return this.http.post(url, body, { headers })
            .toPromise()
            .then(res => res.json())
    }
    // xóa
    deleteWord(_id){
        return  this.http.delete('http://localhost:3000/word/'+_id)
            .toPromise()
            .then(res => res.json())
            .catch(err => console.log(err.message));
    }
    // toogle update isMemorized
    toogleIsMemorized(_id, isMemorized, en, vn){
        const headers = new Headers({'Content-Type':'application/json'});
        const url = 'http://localhost:3000/word';
        return this.http.put(url, JSON.stringify({_id, isMemorized, en, vn}), { headers })
            .toPromise()
            .then(res => res.json());
    }

};