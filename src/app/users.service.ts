import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private marvelStore = new BehaviorSubject<any>(null);
  public marvel$ = this.marvelStore.asObservable();

  constructor() { }

  getUsers() {
    fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6e8876d5a2e619cb33402b178830800c&hash=a750461055ef85dec588c8a12fb5769d', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.results[0]);
        this.marvelStore.next(data.data.results)
  });
  }
}
