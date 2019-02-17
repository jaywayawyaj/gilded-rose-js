class UpdateSellIn {
  reduceSellIn(item) {
    item.sellIn > 0 ? item.sellIn -= 1 : item.sellIn = -1;
  }
}
