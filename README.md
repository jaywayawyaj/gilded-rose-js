# Gilded Rose JS

A classic kata provided which I have attempted during Tech Test Week at Makers
Academy. I attempted it as an exercise in refactoring and functionality, rather
than one in which I have aimed for a high test coverage through unit tests etc.

## Instructions

```
$ git clone https://github.com/jaywayawyaj/gilded-rose-js.git
$ cd gilded-rose-js
$ open index.html
```

###### This should open a browser, from which you should access the console and use these instructions (> denotes user input/instructions):

 You can create items of any name you wish, however if you name any from the following list they will have different properties:

 ```
 "Aged Brie"
 "Sulfuras, Hand of Ragnaros"
 "Backstage passes to a TAFKAL80ETC concert"
 "Conjured"
 ```
You can create as many items as you wish.

Instructions between * means you must choose the value.
Name must be a string.
SellIn and quality must be integers.
Quality must be between 0 and 50.

```
> let *item_variable* = new Item(*name*, *sellIn*, *quality*)
> let shop = new Shop([*list all your items here, seperated by commas*])
> shop.updateQuality()
> shop *(this will allow you to see the items you have created and the change on them)*
```

## Running Tests

```
$ open SpecRunner.html
```
