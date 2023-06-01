export class Coffee {
  // Properties
  name: string;                         // The name of the coffee
  formCode: string;                     // The form code of the coffee
  displayOrder: number;                 // The order in which the coffee should be displayed
  availability: string;                 // The availability of the coffee
  thumbnailUri: string | null;          // The URI of the thumbnail image, or null if not available
  fullSizeUri: string | null;           // The URI of the full-size image, or null if not available
  masterImageUri: string | null;        // The URI of the master image, or null if not available
  sizes: string[];                      // An array of available sizes for the coffee
  id: number;                           // The unique identifier of the coffee
  category: string;                     // The category of the coffee
  assets: {                             // Object containing different types of assets
    thumbnail: {
      large: {
        uri: string;                     // URI of the large thumbnail image
      };
    };
    fullSize: {
      uri: string;                       // URI of the full-size image
    };
    masterImage: {
      uri: string;                       // URI of the master image
    };
  };
  imageUrl: string;                     // The URL of the coffee's image
  price: number;                        // The price of the coffee
  description: any;

  // Constructor
  constructor(
    name: string,
    formCode: string,
    displayOrder: number,
    availability: string,
    thumbnailUri: string | null,
    fullSizeUri: string | null,
    masterImageUri: string | null,
    sizes: string[],
    id: number,
    category: string,
    assets: {
      thumbnail: {
        large: {
          uri: string;
        };
      };
      fullSize: {
        uri: string;
      };
      masterImage: {
        uri: string;
      };
    },
    price: number
  ) {
    // Assign parameter values to properties
    this.name = name;
    this.formCode = formCode;
    this.displayOrder = displayOrder;
    this.availability = availability;
    this.thumbnailUri = thumbnailUri;
    this.fullSizeUri = fullSizeUri;
    this.masterImageUri = masterImageUri;
    this.sizes = sizes;
    this.id = id;
    this.category = category;
    this.assets = assets;
    this.imageUrl = '';                // Initialize imageUrl as an empty string
    this.price = price;
  }
}
