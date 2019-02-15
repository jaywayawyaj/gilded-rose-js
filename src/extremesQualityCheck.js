class ExtremesQualityCheck {
  constructor() {
    this.MIN_QUALITY = 0
    this.MAX_QUALITY = 50
  }

  minQuality(item) {
    item.quality = (
      item.quality <= this.MIN_QUALITY ? this.MIN_QUALITY : item.quality
    )
  }

  maxQuality(item) {
    item.quality = (
      item.quality >= this.MAX_QUALITY ? this.MAX_QUALITY = 50 : item.quality
    );
  }
}
