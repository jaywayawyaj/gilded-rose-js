class UpdateQuality {
  constructor(extremesQualityCheck = new ExtremesQualityCheck) {
    this.check = extremesQualityCheck;
  }

  updateItem(item) {
    if (item.sellIn < 0) {
      item.quality = (item.quality > 0 ? item.quality - 2 : item.quality = 0);
    } else {
      item.quality = (item.quality > 0 ? item.quality - 1 : item.quality = 0);
    }
    this.check.minQuality(item);
  }

  updateAged(item) {
    if (item.sellIn < 0) {
      item.quality = (item.quality < 50 ? item.quality + 2 : item.quality = 50);
    } else {
      item.quality = (item.quality < 50 ? item.quality + 1 : item.quality = 50);
    }
    this.check.maxQuality(item);
  }

  updateBackstagePasses(item) {
    if (item.sellIn <= 10 && item.sellIn > 5) {
      item.quality = (item.quality < 50 ? item.quality + 2 : item.quality = 50);
    } else if (item.sellIn <= 5 && item.sellIn >= 0) {
      item.quality = (item.quality < 50 ? item.quality + 3 : item.quality = 50);
    } else if ( item.sellIn < 0 ) {
      item.quality = 0;
    } else {
      item.quality = (item.quality < 50 ? item.quality + 1 : item.quality = 50);
    }
    this.check.maxQuality(item);
  }

  updateConjured(item) {
    if (item.sellIn < 0) {
      item.quality = (item.quality > 0 ? item.quality - 4 : item.quality = 0);
    } else {
      item.quality = (item.quality > 0 ? item.quality - 2 : item.quality = 0);
    }
    this.check.minQuality(item);
  }
}
