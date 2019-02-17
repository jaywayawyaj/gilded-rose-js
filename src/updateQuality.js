class UpdateQuality {
  constructor(extremesQualityCheck = new ExtremesQualityCheck) {
    this.check = extremesQualityCheck;
  }

  updateItem(item) {
    if (item.sellIn < 0) {
        item.quality > this.check.MIN_QUALITY ?
        item.quality -= 2 : item.quality = this.check.MIN_QUALITY;
    } else {
      item.quality = (
        item.quality > this.check.MIN_QUALITY ?
        item.quality - 1 : item.quality = this.check.MIN_QUALITY
      );
    }
    this.check.minQuality(item);
  }

  updateAged(item) {
    if (item.sellIn < 0) {
        item.quality < this.check.MAX_QUALITY ?
        item.quality += 2 : item.quality = this.check.MAX_QUALITY;
    } else {
        item.quality < this.check.MAX_QUALITY ?
        item.quality += 1 : item.quality = this.check.MAX_QUALITY;
    }
    this.check.maxQuality(item);
  }

  updateBackstagePasses(item) {
    if (item.sellIn <= 10 && item.sellIn > 5) {
      item.quality < this.check.MAX_QUALITY ?
        item.quality += 2 : item.quality = this.check.MAX_QUALITY;
    } else if (item.sellIn <= 5 && item.sellIn >= 0) {
        item.quality < this.check.MAX_QUALITY ?
        item.quality += 3 : item.quality = this.check.MAX_QUALITY;
    } else if ( item.sellIn < this.check.MIN_QUALITY) {
      item.quality = this.check.MIN_QUALITY;
    } else {
        item.quality < this.check.MAX_QUALITY ?
        item.quality += 1 : item.quality = this.check.MAX_QUALITY;
    }
    this.check.maxQuality(item);
  }

  updateConjured(item) {
    if (item.sellIn < 0) {
        item.quality > this.check.MIN_QUALITY ?
        item.quality -= 4 : item.quality = this.check.MIN_QUALITY;
    } else {
        item.quality > this.check.MIN_QUALITY ?
        item.quality -= 2 : item.quality = this.check.MIN_QUALITY;
    }
    this.check.minQuality(item);
  }
}
