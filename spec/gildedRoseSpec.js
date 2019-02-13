
describe("Gilded Rose", function() {

  describe("#updateQuality", function() {

    it("return items name", function() {
      const gildedRose = new Shop([ new Item("foo", 5, 4) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
    });

    it("should reduce sellIn by 1", function() {
      const gildedRose = new Shop([ new Item("foo", 5, 4) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
    });

    it("No product can have negative quality", function() {
      const gildedRose = new Shop([
         new Item("foo", 0, 0),
         new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)
        ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[1].quality).toEqual(0);
    });

    it("No product can have quality above 50", function() {
      const gildedRose = new Shop([
         new Item("Aged Brie", 5, 50),
         new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49)
        ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[1].quality).toEqual(50);
    });

    describe("Regular product", function() {

      it("should reduce quality by 1", function() {
        const gildedRose = new Shop([ new Item("foo", 5, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("foo");
        expect(items[0].quality).toEqual(3);
      });

      it("quality reduction is doubled after sellIn is 0", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("foo");
        expect(items[0].quality).toEqual(3);
      });
    });

    describe("Aged Brie", function() {

      it("Increase quality as it ages", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
      });

      it("Ages doubly fast after sellIn hits 0", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
      });
    });

    describe("Legendary", function() {
      it("Remains unchanged", function() {
        const gildedRose = new Shop(
          [ new Item("Sulfuras, Hand of Ragnaros", 5, 5) ]
        );
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(5);
        expect(items[0].sellIn).toEqual(5);
      });
    });

    describe("Tickets", function() {
      it("quality increases by 1 if sellIn > 10", function() {
        const gildedRose = new Shop(
          [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10) ]
        );
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
      });

      it("quality increases by 2 if 5 < sellIn <= 10", function() {
        const gildedRose = new Shop(
          [ new Item("Backstage passes to a TAFKAL80ETC concert", 7, 9) ]
        );
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
      });

      it("quality increases by 2 if sellIn <= 5 ", function() {
        const gildedRose = new Shop(
          [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 8) ]
        );
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
      });
    });
  });
});
