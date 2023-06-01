import { Component } from '@angular/core';
import { CoffeeService } from './services/coffee/coffee.service';
import { Coffee } from './common/model/coffee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'coffeeapp';
  
}
