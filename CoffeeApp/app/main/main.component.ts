import { Component, OnInit, OnDestroy } from '@angular/core';
import { Coffee } from '../common/model/coffee.model';
import { CoffeeService } from '../services/coffee/coffee.service';
import { Observable, Subscription } from 'rxjs';
import { deburr } from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  searchTerm: string = ''; // Holds the search term entered by the user
  coffeeList$!: Observable<Coffee[]>; // Observable for the list of coffee items
  filteredCoffeeList: Coffee[] = []; // Array to store the filtered coffee data
  searchedCoffeeList: Coffee[] = []; // Array to store the coffee data after search
  private subscription: Subscription; // Subscription object to manage the subscription

  constructor(private coffeeService: CoffeeService) {
    this.subscription = new Subscription(); // Initialize the subscription object
  }

  ngOnInit(): void {
    // Retrieve the list of coffee items using the coffee service
    this.coffeeList$ = this.coffeeService.findAllCoffee();
    // Subscribe to the coffee list observable and update the filtered and searched coffee lists
    this.subscription = this.coffeeList$.subscribe((data) => {
      this.filteredCoffeeList = data;
      this.searchedCoffeeList = this.filteredCoffeeList;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the coffee list subscription to avoid memory leaks
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.onSearch(); // Trigger the search functionality
  }

  onFilteredCoffeeListChange(filteredCoffeeList: Coffee[]) {
    this.filteredCoffeeList = filteredCoffeeList; // Update the filtered coffee list
  }

  onSearchInput() {
    // Reset the searched coffee list if the search term is empty and the lists are not already equal
    if (this.searchTerm.trim() === '' && this.searchedCoffeeList !== this.filteredCoffeeList) {
      this.searchedCoffeeList = this.filteredCoffeeList;
    }
  }

  getCoffeeData(): Coffee[] {
    return this.searchedCoffeeList; // Retrieve the coffee data for the app-coffee component
  }

  onSearch() {
    const searchTermLower = deburr(this.searchTerm.toLowerCase()); // Normalize and convert the search term to lowercase

    if (searchTermLower.trim() === '') {
      this.searchedCoffeeList = this.filteredCoffeeList; // If the search term is empty, set the searched coffee list to the filtered coffee list
    } else {
      this.searchedCoffeeList = this.filteredCoffeeList.filter((coffee) => {
        const coffeeTitleLower = deburr(coffee.name.toLowerCase()); // Normalize and convert the coffee title to lowercase
        return (
          coffeeTitleLower.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchTermLower) ||
          this.containsPartialWords(coffeeTitleLower, searchTermLower)
        ); // Check if the coffee title matches the search term or contains partial words
      });
    }
  }

  containsPartialWords(coffeeName: string, searchTerm: string): boolean {
    const coffeeWords = coffeeName.split(' '); // Split the coffee title into words
    const searchWords = searchTerm.split(' '); // Split the search term into words
    return searchWords.every((word) =>
      coffeeWords.some((coffeeWord) => deburr(coffeeWord).includes(word))
    ); // Check if all the search words are found partially in the coffee title
  }
}
