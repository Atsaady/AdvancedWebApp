import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TermsService {
  constructor() {}

  getTerms() {
    //TODO
    return axios.get('http://localhost:5000/terms');
  }
}
