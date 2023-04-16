const restaurant = {
  name: 'Classico Italiano',
  menu: ['Garlic', 'Bread', 'Salad', 'Pizza', 'Pasta'],
  openingHours: {
    friday: { open: 11, close: 24 },
    saturday: { open: 12, close: 23 }
  }
};

// Longhand
console.log('value of friday in restaurant:', restaurant.openingHours.friday);
console.log('value of name in restaurant:', restaurant.name);

// Shorthand
const { name, openingHours } = restaurant;
const {
  openingHours: { friday }
} = restaurant;

//we can go further and get the value of open in friday
const {
  openingHours: {
    friday: { open }
  }
} = restaurant;

console.log(name, friday, open);
