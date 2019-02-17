class StandardItem {
  constructor(extremesQualityCheck = new ExtremesQualityCheck) {
    this.check = extremesQualityCheck;
  }

  updateQuality(item) {
    if (item.sellIn < 0) {
        item.quality > this.check.MIN_QUALITY ?
        item.quality - 2 : item.quality = this.check.MIN_QUALITY;
    } else {
        item.quality > this.check.MIN_QUALITY ?
        item.quality - 1 : item.quality = this.check.MIN_QUALITY;
    }
    this.check.belowMin(item);
  }
}
