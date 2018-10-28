import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  p = new BehaviorSubject<any>(null);
  personas = this.p.asObservable();
  url = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {
    this.generateData();
  }

  removePerson() {
    const g = this.p.getValue();
    g.pop();
    this.p.next(g);
  }

  generateData() {
    this.http
      .get(this.url)
      .subscribe(data => this.p.next(data), error => error);
  }
}
