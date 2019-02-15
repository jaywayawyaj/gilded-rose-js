class UpdateSellIn {
  reduceSellIn(item) {
    item.sellIn = (item.sellIn > 0 ? item.sellIn - 1 : item.sellIn = -1);
  }
}
