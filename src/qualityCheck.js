class ExtremesQualityCheck {

  minQuality(item) {
    item.quality = (item.quality <= 0 ? item.quality = 0 : item.quality)
  }

  maxQuality(item) {
    item.quality = (item.quality >= 50 ? item.quality = 50 : item.quality);
  }
}
