class ExtremesQualityCheck {
  constructor() {
    this.MIN_QUALITY = 0
    this.MAX_QUALITY = 50
  }

  minQuality(item) {
    item.quality > this.MIN_QUALITY
    return item;
  }

  maxQuality(item) {
    item.quality > this.MAX_QUALITY
    return item;
  }

  belowMin(item) {
    item.quality = (
      item.quality <= this.MIN_QUALITY ? this.MIN_QUALITY : item.quality
    )
  }

  aboveMax(item) {
    item.quality = (
      item.quality >= this.MAX_QUALITY ? this.MAX_QUALITY = 50 : item.quality
    );
  }
}
