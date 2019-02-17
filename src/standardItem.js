class StandardItem {
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
}
