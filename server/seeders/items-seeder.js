var mongoose = require('mongoose');
var Item = require('../models/Item.model');

mongoose.connect('mongodb://mongodb:27017');
Item.collection.drop();
var items = [
  new Item({
    name: '[Seed] Item 1',
    category: '[Seed] Category 1',
    count: 13
  }),
  new Item({
    name: '[Seed] Item 2',
    category: '[Seed] Category 1',
    count: 73
  }),
  new Item({
    name: '[Seed] Item 3',
    category: '[Seed] Category 2',
    count: 41
  }),
  new Item({
    name: '[Seed] Item 4',
    category: '[Seed] Category 2',
    count: 92
  }),
  new Item({
    name: '[Seed] Item 5',
    category: '[Seed] Category 2',
    count: 78
  }),
  new Item({
    name: '[Seed] Item 6',
    category: '[Seed] Category 1',
    count: 41
  }),
  new Item({
    name: '[Seed] Item 7',
    category: '[Seed] Category 3',
    count: 56
  }),
  new Item({
    name: '[Seed] Item 8',
    category: '[Seed] Category 3',
    count: 90
  }),
  new Item({
    name: '[Seed] Item 9',
    category: '[Seed] Category 1',
    count: 14
  }),
  new Item({
    name: '[Seed] Item 10',
    category: '[Seed] Category 1',
    count: 3
  }),
  new Item({
    name: '[Seed] Item 11',
    category: '[Seed] Category 2',
    count: 17
  }),
  new Item({
    name: '[Seed] Item 12',
    category: '[Seed] Category 3',
    count: 23
  })
];

var count = 0;
items.forEach((elem) => {
  elem.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      count++;
      if (count == items.length) quit();
    }
  });
});

function quit() {
  console.log('Added ',items.length,' Item seeds');
  mongoose.disconnect();
}
