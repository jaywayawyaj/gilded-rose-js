class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.sortItems();
    return this.items;
  }

  sortItems() {
    let items = this.items;
    items.forEach((item) => {
      this.determineType(item);
    })
    return items;
  }

  determineType(item) {
    switch(item.name) {
      case "Aged Brie":
        this.reduceSellIn(item);
        this.updateAged(item);
        return item;
        break;
      case "Sulfuras, Hand of Ragnaros":
        return item;
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.reduceSellIn(item);
        this.updateBackstagePasses(item);
        return item;
        break;
      default:
        this.reduceSellIn(item);
        this.updateItem(item);
        return item;
    }
  }

  reduceSellIn(item) {
    item.sellIn = (item.sellIn > 0 ? item.sellIn - 1 : item.sellIn = -1);
    return item;
  }

  updateItem(item) {
    if (item.sellIn < 0) {
      item.quality = (item.quality > 0 ? item.quality - 2 : item.quality = 0);
    } else {
      item.quality = (item.quality > 0 ? item.quality - 1 : item.quality = 0);
    }
    this.belowZero(item);
    return item;
  }

  updateAged(item) {
    if (item.sellIn < 0) {
      item.quality = (item.quality < 50 ? item.quality + 2 : item.quality = 50);
    } else {
      item.quality = (item.quality < 50 ? item.quality + 1 : item.quality = 50);
    }
    this.maxQuality(item);
    return item;
  }

  updateBackstagePasses(item) {
    console.log(item);
    if (item.sellIn <= 10 && item.sellIn > 5) {
      item.quality = (item.quality < 50 ? item.quality + 2 : item.quality = 50);
    } else if (item.sellIn <= 5 && item.sellIn >= 0) {
      item.quality = (item.quality < 50 ? item.quality + 3 : item.quality = 50);
    } else if ( item.sellIn < 0 ) {
      item.quality = 0;
    } else {
      item.quality = (item.quality < 50 ? item.quality + 1 : item.quality = 50);
    }
    this.maxQuality(item);
    return item;
  }

  belowZero(item) {
    item.quality = (item.quality <= 0 ? item.quality = 0 : item.quality)
    return item;
  }

  maxQuality(item) {
    item.quality = (item.quality >= 50 ? item.quality = 50 : item.quality)
  }
}
