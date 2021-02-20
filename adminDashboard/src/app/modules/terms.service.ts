// import { Injectable } from '@angular/core';
// import axios from 'axios';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class TermsService {
//   constructor() {}
//

// }

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getTerms() {
    return axios.get('http://localhost:5000/terms');
  }

  createTerm(termName: string, des: string, fl: string): Observable<any>{
    return this.http.post('http://localhost:5000/terms', {
      termName,
      des,
      fl
    });
  }

  deleteStock(termName: string): Observable<any>{
  alert(termName);
  return this.http.delete(`http://localhost:5000/terms/${termName}`);
  }

  updateTerm(term: string, termName: string, des: string, fl: string): Observable<any>{
    return this.http.put(`http://localhost:5000/terms/update`, {
      term,
      termName,
      des,
      fl
    });
  }
}

