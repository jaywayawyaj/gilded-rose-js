class UpdateQuality {
  constructor(extremesQualityCheck = new ExtremesQualityCheck) {
    this.check = extremesQualityCheck;
    this.MIN_QUALITY = 0
    this.MAX_QUALITY = 50
  }

  updateItem(item) {
    if (item.sellIn < 0) {
      item.quality = (
        item.quality > this.MIN_QUALITY ?
        item.quality - 2 : item.quality = this.MIN_QUALITY
      );
    } else {
      item.quality = (
        item.quality > this.MIN_QUALITY ?
        item.quality - 1 : item.quality = this.MIN_QUALITY
      );
    }
    this.check.minQuality(item);
  }

  updateAged(item) {
    if (item.sellIn < 0) {
      item.quality = (
        item.quality < this.MAX_QUALITY ?
        item.quality + 2 : item.quality = this.MAX_QUALITY
      );
    } else {
      item.quality = (
        item.quality < this.MAX_QUALITY ?
        item.quality + 1 : item.quality = this.MAX_QUALITY
      );
    }
    this.check.maxQuality(item);
  }

  updateBackstagePasses(item) {
    if (item.sellIn <= 10 && item.sellIn > 5) {
      item.quality = (
        item.quality < this.MAX_QUALITY ?
        item.quality + 2 : item.quality = this.MAX_QUALITY
      );
    } else if (item.sellIn <= 5 && item.sellIn >= 0) {
      item.quality = (
        item.quality < this.MAX_QUALITY ?
        item.quality + 3 : item.quality = this.MAX_QUALITY
      );
    } else if ( item.sellIn < this.MIN_QUALITY) {
      item.quality = this.MIN_QUALITY;
    } else {
      item.quality = (
        item.quality < this.MAX_QUALITY ?
        item.quality + 1 : item.quality = this.MAX_QUALITY
      );
    }
    this.check.maxQuality(item);
  }

  updateConjured(item) {
    if (item.sellIn < 0) {
      item.quality = (
        item.quality > this.MIN_QUALITY ?
        item.quality - 4 : item.quality = this.MIN_QUALITY
      );
    } else {
      item.quality = (
        item.quality > this.MIN_QUALITY ?
        item.quality - 2 : item.quality = this.MIN_QUALITY
      );
    }
    this.check.minQuality(item);
  }
}
