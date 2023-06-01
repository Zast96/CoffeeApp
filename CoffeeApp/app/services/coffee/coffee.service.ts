import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from 'src/app/common/model/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  url =
    'https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks';

  constructor(private http: HttpClient) { }

  findAllCoffee() {
    return this.http.get<Coffee[]>(this.url);
  }
}
