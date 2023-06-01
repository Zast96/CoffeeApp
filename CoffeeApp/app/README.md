# Coffee App
> you'll find a .pdf with the documentations that will explain how the app is build and how it works. Here I will add some more specific details. 

__Technical Details__





Paths:

- Created a service that does the API call in ->   <app\coffeeapp\src\app\services\coffee\coffee.service.ts>

- Stored the API data inside the coffee module in -> <app\coffeeapp\src\app\common\model\coffee.model.ts>

- Created the coffee component and main component in -> <app\coffeeapp\src\app\main>

- Images for the references in -> <app\coffeeapp\src\assets>



Components Details:

<coffee.component.css>
- Used the :nth-last-child to add more margin-bottom to the last two cards because they were covered by the toolbar;

- Used .card-price::before to display the $ in a different color.

<main.component.html>
- Used the same ellipse image and I multiplied it;

- Used the font-awesome icons and search bar instead of the one on figma because they were low-res.

<main.component.css>
- I've chosen to not import the search-button icon because it was low-res and I opted for taking just the color and I found a font-awesome icon as similar as possible.



Imports:

- lodash for the accent insensitive;
- font-awesome for icons and searchbar.



Final notes:

I haven't used some styles from the Figma because I encountered some problems with them and the responsive layout. Hope you'll enjoy this app and take care of the code! :>

