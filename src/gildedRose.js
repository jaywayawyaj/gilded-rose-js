class Shop {
  constructor(items=[], sortItems = new SortItems){
    this.items = items;
    this.sortItems = sortItems;
  }

  updateQuality() {
    this.sortItems.parseItems(this.items);
    return this.items;
  }
}
