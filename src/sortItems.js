class SortItems {
  constructor(updateQuality=new UpdateQuality, updateSellIn=new UpdateSellIn) {
    this.updateQuality = updateQuality;
    this.updateSellIn = updateSellIn;
  }

  parseItems(items) {
    items.forEach((item) => {
      this.determineType(item);
    })
    return items;
  }

  determineType(item) {
    switch(item.name) {
      case "Aged Brie":
        this.updateSellIn.reduceSellIn(item);
        this.updateQuality.updateAged(item);
        return item;
        break;
      case "Sulfuras, Hand of Ragnaros":
        return item;
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.updateSellIn.reduceSellIn(item);
        this.updateQuality.updateBackstagePasses(item);
        return item;
        break;
      case "Conjured":
        this.updateSellIn.reduceSellIn(item);
        this.updateQuality.updateConjured(item);
        return item;
        break;
      default:
        this.updateSellIn.reduceSellIn(item);
        this.updateQuality.updateItem(item);
        return item;
    }
  }
}
