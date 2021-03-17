import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(protected http: HttpClient) {
  }

  ping() {
      return this.http.get('http://localhost:3000/ping');
  }
}