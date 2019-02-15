class QualityCheck {
  
  minQuality(item) {
    item.quality = (item.quality <= 0 ? item.quality = 0 : item.quality)
    return item;
  }

  maxQuality(item) {
    item.quality = (item.quality >= 50 ? item.quality = 50 : item.quality)
  }
}
