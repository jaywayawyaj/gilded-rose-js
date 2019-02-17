class UpdateQuality {
  constructor(extremesQualityCheck = new ExtremesQualityCheck) {
    this.check = extremesQualityCheck;
  }

  updateItem(item) {
    if (item.sellIn < 0) {
        this.check.minQuality(item) ?
        item.quality -= 2 : item.quality = this.check.MIN_QUALITY;
    } else {
        this.check.minQuality(item) ?
        item.quality -= 1 : item.quality = this.check.MIN_QUALITY;
    }
    this.check.belowMin(item);
  }

  updateAged(item) {
    if (item.sellIn < 0) {
        this.check.maxQuality(item) ?
        item.quality += 2 : item.quality = this.check.MAX_QUALITY;
    } else {
        item.quality < this.check.MAX_QUALITY ?
        item.quality += 1 : item.quality = this.check.MAX_QUALITY;
    }
    this.check.aboveMax(item);
  }

  updateBackstagePasses(item) {
    item.quality += 1;
    if (item.sellIn < 10 ) { item.quality += 1 }
    if (item.sellIn < 5) { item.quality += 1 }
    if ( item.sellIn < 0) { item.quality = this.check.MIN_QUALITY }
    this.check.aboveMax(item);
  }

  updateConjured(item) {
    if (item.sellIn < 0) {
        this.check.minQuality(item) ?
        item.quality -= 4 : item.quality = this.check.MIN_QUALITY;
    } else {
        this.check.minQuality(item) ?
        item.quality -= 2 : item.quality = this.check.MIN_QUALITY;
    }
    this.check.belowMin(item);
  }
}
