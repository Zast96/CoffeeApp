import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Coffee } from 'src/app/common/model/coffee.model';
import { CoffeeService } from 'src/app/services/coffee/coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  @Input() coffeeData: Coffee[] = []; // Input property to receive coffee data from parent component
  @Input() searchedCoffeeList: Coffee[] = []; // Input property to hold the list of coffee items after search
  @Output() filteredCoffeeListChange = new EventEmitter<Coffee[]>(); // Output property to emit the filtered coffee list
  filteredCoffeeList: Coffee[] = []; // Array to store filtered coffee data
  searchTerm: string = ''; // Holds the search term entered by the user

  constructor(private http: HttpClient, private coffeeService: CoffeeService) { }

  ngOnInit() {
    // Fetch coffee data from the API
    this.http
      .get<any>('https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks')
      .subscribe((data) => {
        // Assign the fetched coffee data to the component property
        this.coffeeData = data;
        // Generate the initial card rows based on the filtered and ordered coffee data
        this.filterCoffeeData();
        this.searchedCoffeeList = this.filteredCoffeeList;
      });
  }

  /**
   * Filters and slices the coffee data to get the first 14 items with a valid thumbnail URI.
   * Emits the filtered coffee list to the parent component.
   */
  filterCoffeeData() {
    this.filteredCoffeeList = this.coffeeData
      .filter((coffee) => coffee.assets?.thumbnail?.large?.uri) // Filter the coffee data based on the presence of a valid thumbnail URI
      .sort((a, b) => a.displayOrder - b.displayOrder) // Sort the coffee data based on the display order
      .slice(0, 14); // Slice the coffee data to get the first 14 items

    // Emit the filtered coffee list to the parent component
    this.filteredCoffeeListChange.emit(this.filteredCoffeeList);
  }

  /**
   * Displays an alert to notify the user that the coffee was added to the cart.
   * Implement your custom logic here.
   * @param coffee The coffee object to be added to the cart.
   */
  addToCart(coffee: Coffee) {
    window.alert('Coffee added to cart!');
  }
}
