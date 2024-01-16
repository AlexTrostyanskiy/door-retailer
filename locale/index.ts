type Locale = {
  [key: string]: string | { [key: string]: string } | any;
};

const locale: Locale = {
  languageName: "English",
  welcome: "Hey, there",
  addToCart: "Add to cart",
  available: "available",
  notAvailable: "Not available",
  categories: "categories",
  startShopping: "Start shopping",
  learnMore: "Learn more",
  continueShopping: "Continue shopping",
  shoppingBag: "Shopping Bag",
  days: "days",
  freeOver: "free over",
  language: "language",
  languages: {
    "en-us": "english",
    "it-it": "italian",
    "fr-fr": "french"
  },
  method: "method",
  outOfStock: "The requested quantity is not available",
  price: "price",
  selectSize: "Select your size",
  shippingTo: "Shipping to",
  backToAllProducts: "Back to all products",
  reviews: "Reviews",
  total: "Total",
  subTotal: "Subtotal",
  discount: "Discount",
  taxes: "Taxes",
  giftCard: "Gift Card",
  items: "items",
  viewMore: "view more",
  emptyProducts: "No products",
  shipping: "Shipping",
  subscribe: "Subscribe",
  subscribeTitle: "Subscribe to our newsletter",
  subscribeText: "The latest news, products, and discounts, sent to your inbox weekly",
  subscribePlaceholder: "Enter your email address"
};

export default locale;
